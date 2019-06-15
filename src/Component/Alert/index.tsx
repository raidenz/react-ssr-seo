/**
 * Categories ReactStarap Alert by variant
 */

import React from 'react';
import { Alert as RRAlert } from 'reactstrap';

export interface Props {
  /**
   * set color
   * @default primary
   **/
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  heading: string;
  children: React.ReactNode;
}

/**
 * ## Comment will Show Up in storybook
 *
 */

const Alert = ({ color, children, heading }: Props) => {
  return (
    <RRAlert color={color ? color : 'primary'}>
      {heading ? <h4 className="alert-heading">{heading}</h4> : null}
      {children}
    </RRAlert>
  );
};

export default Alert;
