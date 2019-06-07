import React from 'react';
import Helmet from 'react-helmet';
import { ContentWrapper, ButtonBack } from '../../Component';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <ContentWrapper>
        <ButtonBack>Back</ButtonBack>
        About
      </ContentWrapper>
    </React.Fragment>
  );
};

export default About;
