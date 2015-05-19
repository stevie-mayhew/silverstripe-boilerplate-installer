/** =========================================
 * Init
 ===========================================*/

/** -----------------------------------------
 * Bower Components
 *
 * Module names are set in the
 * package.json
 -------------------------------------------*/

var $ = require('jquery');
global.jQuery = require('jquery');
require('owlcarousel');
require('bootstrap-modal');
require('bootstrap-collapse');
require('module-popout');
require('parsley');

/** -----------------------------------------
 * Project Scripts
 -------------------------------------------*/

require('./carousel.js');
require('./waypoints.js');