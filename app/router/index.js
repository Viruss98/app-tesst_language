import Home from '../components/Home'
import SlideShow from '../components/SlideShow'
import SpeechRecognize from '../components/SpeechRecognize'
import Login from '../components/Login'
import Greeting from '../components/Greeting'

import Vue from 'nativescript-vue';
import mixin from '../mixin/index.js';


Vue.use(mixin);

const routes = {
  Home,
  SlideShow,
  SpeechRecognize,
  Login,
  Greeting
}

export default routes