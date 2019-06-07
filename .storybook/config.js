import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

import '../public/css/style.css';

setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});

function loadStories() {
  require('../src/stories');
}
/**
 * Experiment Load automatically all Component from src/Component
 * with filename *.stories.js
 */
// const req = require.context("../src/Component", true, /\.stories\.js$/);
// function loadStories() {
//     req.keys().forEach(filename => req(filename));
// }

configure(loadStories, module);
