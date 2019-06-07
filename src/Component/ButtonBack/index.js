import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const ButtonBack = ({ history, children }) => (
  <Button onClick={() => history.goBack()}> {children} </Button>
);

export default withRouter(ButtonBack);
