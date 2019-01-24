import Vue from 'nativescript-vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
const connectivityModule = require("tns-core-modules/connectivity");
import * as ApplicationSettings from "application-settings";

let snackbar = new SnackBar();
let myConnectionType =  connectivityModule.getConnectionType();
const mixin = {
  methods: {
    loadStorageLogin() {
      let loginState = ApplicationSettings.getBoolean("isLoggedIn");
      if (loginState == undefined || loginState == false) {
        // console.log('not login...')
        this.isGettingStorage = false
        // alert('not login')
      } else {
        let authUser = ApplicationSettings.getString("authUser");
        authUser = JSON.parse(authUser)
        // console.log(authUser.authUser)
        //PATH TO STORE AND RETURN 
        this.$store.dispatch('login', {
          account: authUser.authUser.account,
          password: authUser.authUser.password,
        }).then(res => {
           this.isGettingStorage = false;
           //NEU LA LAN 2 VAO APP THI VAO LUON HOME ???
          //this.$navigateTo(App,{animated: true, transition:{name:'slideLeft',duration: 250,curve:'easeIn'}});
        })
      }
    },
    loadLoginCres() {
      let authUser = ApplicationSettings.getString("authUser");
      if (authUser != undefined) {
        authUser = JSON.parse(authUser)
        this.account = authUser.authUser.account ? authUser.authUser.account : ''
        this.password = authUser.authUser.password ? authUser.authUser.password : ''
      }
    },
    callMixin() {
      alert('Mixin Work!')
    },
    showSnackBar(text,color,background) {
      snackbar.simple(text, color, background, 3, false)
    },
    getConnectivity() {
      switch (myConnectionType) {
        case connectivityModule.connectionType.none:
            // Denotes no Internet connection.
            console.log("No connection");
            let text = 'You must has internet connect to login!'
            snackbar.simple(text, '#fff', '#f44336', 3, false)
            break;
        case connectivityModule.connectionType.wifi:
            // Denotes a WiFi connection.
            console.log("WiFi connection");
            break;
        case connectivityModule.connectionType.mobile:
            // Denotes a mobile connection, i.e. cellular network or WAN.
            console.log("Mobile connection");
            break;
        case connectivityModule.connectionType.ethernet:
            // Denotes a ethernet connection.
            console.log("Ethernet connection");
            break;
        // Bluetooth functionality in master branch (to be released with 5.0.0)
        // case connectionType.bluetooth:
        //     // Denotes a ethernet connection.
        //     console.log("Bluetooth connection");
        //    //     break;
        default:
            break;
      }
    },
  },
}

//- export it as a plugin
export default {
  install (Vue, options) {
    Vue.mixin(mixin)
  }
}


