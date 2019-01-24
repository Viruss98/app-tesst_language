import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import * as ApplicationSettings from "application-settings";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const STORAGE = "STORAGE";

const store = new Vuex.Store({
  // modules: {
  //   counter,
  // },
  state: {
    isLoggedIn: false,
    authUser: '',
    // cart: '',
  },
  mutations: {
      [LOGIN](state) {
          state.pending = true;
      },
      [LOGIN_SUCCESS](state, creds) {
          state.isLoggedIn = true;
          state.pending = false;
          state.authUser = creds
      },
      [LOGOUT](state) {
          state.isLoggedIn = false;
					state.authUser = ''
					ApplicationSettings.setBoolean("isLoggedIn", false);
					// KHI NGUOI DUNG XOA HET DU LIEU TRONG STORAGEWeb
					// ApplicationSettings.clear();
      },
      [STORAGE](creds) {
				ApplicationSettings.setBoolean("isLoggedIn", true);
				ApplicationSettings.setString("authUser", JSON.stringify(creds));
    	},
  },
  actions: {
      // nuxtServerInit({ commit }, { req }) {
      //     if (req.session && req.session.length) {
      //         commit(LOGIN_SUCCESS, req.session);
      //     }  
      // },
      login({
          state,
          commit,
          rootState
      }, creds) {
          return new Promise(resolve => {
              setTimeout(() => {
									commit(LOGIN_SUCCESS, creds);
									commit(STORAGE, creds);
                  resolve();
              }, 2000);
          });
      },
      logout({
          commit
      }) {
          commit(LOGOUT);
      }
  },
  getters: {
      isLoggedIn: state => {
          return state.isLoggedIn;
      },
      authUser: state => {
          return state.authUser;
      },
  },
  strict: debug,
});

// Vue.prototype.$store = store;

export default store
