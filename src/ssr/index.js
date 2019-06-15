import React from 'react';
import express from 'express';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import hbs from 'handlebars';
import App from '../App';
import assets from './../../build/asset-manifest.json';
import store from './../store/server';

require('ignore-styles');
// require('ignore-styles').default(['.sass', '.scss', 'css']);

const router = express.Router();

// get preload from somewhere,
// fetch user to get role?
const preloadedState = [];
console.log(store);

const jsLoader = Object.keys(assets.files).filter(asset => {
  if (asset.includes('.map')) {
    return false;
  }
  return asset.includes('chunk.js');
});
const renderJs = jsLoader.map(
  item => `<script src=${item} charset="utf-8"></script>`
);
// console.log(asset)
router.get('*', async (req, res) => {
  const location = req.url;
  const context = {};
  const helmet = Helmet.renderStatic();
  const theHtml = `
  <!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
  <head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  <link rel="stylesheet" type="text/css" href=${assets.files['main.css']}>
  <link rel="stylesheet" type="text/css" href="/css/style.css">
  </head>
  <body ${helmet.bodyAttributes.toString()} >
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">{{{content}}}</div>
  <script charset="utf-8">
  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
    </script>
    <script>!function(l){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],f=0,i=[];f<n.length;f++)t=n[f],p[t]&&i.push(p[t][0]),p[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(l[r]=o[r]);for(s&&s(e);i.length;)i.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==p[u]&&(n=!1)}n&&(c.splice(r--,1),e=f(f.s=t[0]))}return e}var t={},p={1:0},c=[];function f(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return l[e].call(r.exports,r,r.exports,f),r.l=!0,r.exports}f.m=l,f.c=t,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(r,e){if(1&e&&(r=f(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)f.d(t,n,function(e){return r[e]}.bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;a()}([])</script>
    {{#each chunk}}
      {{{ this }}}
    {{/each}}
    <script src=${assets.files['main.js']} charset="utf-8"></script>
  </body>
  </html>
  `;

  /*
  test
  Disable react devtol in production
  <script>
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
  </script>
  */

  const hbsTemplate = hbs.compile(theHtml);
  const component = renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  // console.log('compo', component)
  console.log(context);
  console.log(location);
  const htmlToSend = hbsTemplate({ content: component, chunk: renderJs });
  res.send(htmlToSend);
});

export default router;
