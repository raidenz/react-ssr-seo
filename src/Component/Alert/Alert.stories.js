import React from 'react';

import { storiesOf } from '@storybook/react';
import Alert from '../Alert';
import { text, select } from '@storybook/addon-knobs/react';

const colors = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  light: 'light',
  dark: 'dark'
};

storiesOf('Components', module).addWithJSX('Alert', () => (
  <div className="p-3">
    <Alert
      color={select('color', colors, 'primary')}
      heading={text('heading', 'heading')}
    >
      {text('children', 'content')}
    </Alert>
  </div>
));
