import React from 'react';
import { Badge as RRBadge } from 'reactstrap';

const Badge = ({ children, color }) => {
  return <RRBadge color={color ? color : 'primary'}>{children}</RRBadge>;
};

export default Badge;
