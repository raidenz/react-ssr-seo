import React from 'react';
import { setDefaults, withInfo } from '@storybook/addon-info';
import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';
import '../public/css/style.css';

function Code({ children }) {
  return <code> fail {children}</code>;
}

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  require('../src/stories/index');
  req.keys().forEach(filename => req(filename));
}
setDefaults({
  components: { code: Code },
});

addDecorator(
  withInfo({
    header: false,
    inline: true,
    source: true,
    components: { code: Code },
    marksyConf: { code: Code },
})
);

addDecorator(withKnobs);
setAddon(JSXAddon);

configure(loadStories, module);