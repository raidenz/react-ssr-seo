import React from 'react';
import Component from './';
import { renderWithRedux } from '../../helper/test-utils';

describe('test load componet', () => {
  it('should render without crash', () => {
    renderWithRedux(<Component />);
  });
});
