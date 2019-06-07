import React from 'react';
import { ContentWrapper } from '../../Component';
import Helmet from 'react-helmet';

const Homepage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <ContentWrapper>Home</ContentWrapper>
    </React.Fragment>
  );
};

export default Homepage;
