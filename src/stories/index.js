import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
// import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import { Badge } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import { Alert } from './../Component';
import { PageFull } from './../Layout';
// import { linkTo } from '@storybook/addon-links';
// import { action } from '@storybook/addon-actions';

storiesOf('Ui|Alert', module)
  .addDecorator(withKnobs)
  // .addDecorator(withInfo)
  .add('default', () => {
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
    const color = select('color', colors, 'primary');

    return (
      <div className="p-3">
        <Alert color={color} heading={text('heading', '')}>
          {text('children', 'Alert Message')}
        </Alert>
      </div>
    );
  });

storiesOf('Ui|Badge', module)
  .addDecorator(withKnobs)
  .add('default', () => {
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
    const color = select('color', colors, 'primary');

    return (
      <div className="p-3">
        <Badge color={color}> {text('children', 'Badge Message')}</Badge>
      </div>
    );
  });

storiesOf('Layout|Page', module)
  .add('description', () => (
    <div className="p-3">
      <h3>Idea</h3>
      <p>The layout sepated with main container,</p>
      <p>
        so it will easy for us to change the Layout in the future without
        interfere wth main Component
      </p>
    </div>
  ))
  .add('pageFull', () => (
    <BrowserRouter>
      <PageFull component={() => <div className="main-content" />} />
    </BrowserRouter>
  ));
