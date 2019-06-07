/**
 * Categories ReactStarap Alert by variant
 */

import React from 'react';
import { Alert as RRAlert } from 'reactstrap';

const Alert = ({ color, children, heading }) => {
  return (
    <RRAlert color={color ? color : 'primary'}>
      {heading ? <h4 className="alert-heading">{heading}</h4> : null}
      {children}
    </RRAlert>
  );
};

export default Alert;
