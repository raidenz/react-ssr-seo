import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: Props) => {
  return <div className="main-content">{children}</div>;
};

export default ContentWrapper;
