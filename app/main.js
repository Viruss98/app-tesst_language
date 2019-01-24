import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import Greeting from './components/Greeting'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

// Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

import routes from './router'

Vue.registerElement(
  'PullToRefresh',
  () => require('nativescript-pulltorefresh').PullToRefresh
);

Vue.registerElement("Carousel", () => require("nativescript-carousel").Carousel); 
Vue.registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

Vue.registerElement("Ripple", () => require("nativescript-ripple").Ripple); 

Vue.registerElement('CheckBox', () => require('nativescript-checkbox').CheckBox, {
	model: {
		prop: 'checked',
		event: 'checkedChange'
	}
});

Vue.registerElement('CardView', () => require('nativescript-cardview').CardView);

Vue.prototype.$routes = routes

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': './assets/font-awesome.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

import store from './store'
Vue.prototype.$store = store
new Vue({
  store,
  render: h => h('frame', [h(Greeting)])
}).$start()
