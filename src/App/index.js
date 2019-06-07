import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import Homepage from './Homepage';
import About from './About';
import Page404 from './Page404';
import { PageFull } from './../Layout';

const App = () => {
  return (
    <Fragment>
      <Helmet>
        {
          // put basic Meta seo Here
        }
        <meta charSet="utf-8" />
        <title>Seo App</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="googlebot-news" content="index,follow" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Seo App" />
      </Helmet>
      <Switch>
        <PageFull path="/" exact component={Homepage} />
        <PageFull path="/about" exact component={About} />
        <PageFull path="/test" exact component={() => 'test'} />
        <Route component={Page404} />
      </Switch>
    </Fragment>
  );
};

export default App;
