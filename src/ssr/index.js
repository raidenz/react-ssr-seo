import React from 'react';
import express from 'express';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import hbs from 'handlebars';
import App from '../App';
import asset from './../../build/asset-manifest.json';
import store from './../store/server';

require('ignore-styles');
// require('ignore-styles').default(['.sass', '.scss', 'css']);

const router = express.Router();

// get preload from somewhere,
// fetch user to get role?
const preloadedState = [];
console.log(store);
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
  <link rel="stylesheet" type="text/css" href=${asset.files['main.css']}>
  <link rel="stylesheet" type="text/css" href="/css/style.css">
  </head>
  <body ${helmet.bodyAttributes.toString()} >
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">{{{content}}}</div>
  <script src=${asset.files['main.js']} charset="utf-8"></script>
  <script charset="utf-8">
  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
  </script>
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
  const htmlToSend = hbsTemplate({ content: component });
  res.send(htmlToSend);
});

export default router;
