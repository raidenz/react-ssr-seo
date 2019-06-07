import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer } from './../../Component';

const FullPage = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <React.Fragment>
          <Header />
          <div className="container">
            <Component {...props} />
          </div>
          <Footer />
        </React.Fragment>
      )}
    />
  );
};

export default FullPage;
