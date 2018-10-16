import Vue from 'vue';
import jQuery from 'jquery';
import Foundation from 'foundation-sites';
import Notifications from 'vue-notification';

Vue.use(Notifications);

window.$ = jQuery;
window.jQuery = jQuery;
window.Foundation = Foundation;

require('./filter');
require('./plugins/http');
