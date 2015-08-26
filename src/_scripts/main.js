// Main javascript entry point.
// Should handle bootstrapping/starting application.

'use strict';


import $ from 'jquery';
window.jQuery = $; // Support old-style plugins using global `jQuery` object.
window.$ = $;      // Support old-style plugins using global `$` object.

import mousewheelInit from 'jquery-mousewheel';
mousewheelInit($); // Initialize `jquery-mousewheel` plugin, applying it to `$`.

require('bootstrap'); // `require` (no `import`) cuz needs global `jQuery`.

import AboutMe from '../_modules/aboutme/aboutme';


$(() => {
  new AboutMe();
});
