import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
// import { wInfo } from '../../../.storybook/utils';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Components', module).addWithJSX(
  'basic Button',
  //   wInfo(`
  // waiting fixed bug from addon-info, cannot load markdown style

  //   ### Notes

  //   This is a button

  //   ### Usage
  //   // ~~~js
  //   // <Button
  //   //   label={'Enroll'}
  //   //   disabled={false}
  //   //   onClick={() => alert('hello there')}
  //   // />
  //   // ~~~`
  // )
  () => (
    <Button
      label={text('label', 'Enroll')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  )
);
