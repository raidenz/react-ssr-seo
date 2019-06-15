import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

interface Props {
  history: {
    goBack(): void;
  };
  children?: React.ReactNode;
}
const ButtonBack = ({ history, children }: Props) => (
  <Button onClick={() => history.goBack()}> {children} </Button>
);

export default withRouter(ButtonBack);
