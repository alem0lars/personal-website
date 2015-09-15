// Main javascript entry point.
// Should handle bootstrapping/starting application.

'use strict';


import $ from 'jquery';
window.jQuery = $; // Support old-style plugins using global `jQuery` object.
window.$ = $;      // Support old-style plugins using global `$` object.

// Use require() for plugins not supporting ES6.
require('jquery-mousewheel');
require('./terminal-upstream');
require('bootstrap');

import MainConsole from '../_modules/mainconsole/mainconsole';


$(() => {
  var mainConsole = new MainConsole('.main-console');
  mainConsole.start();
});
