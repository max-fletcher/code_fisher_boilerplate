require('./bootstrap');

window.Vue = require('vue').default;

import Vuetify from "./plugins/vuetify"

const app = new Vue({
    vuetify: Vuetify,
    el: '#app',
});
