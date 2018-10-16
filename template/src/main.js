import Vue from 'vue';
import Base from './views/pages/Base.vue';

import router from './router';
import store from './store';
import i18n from './translations';

import './assets/scss/_style.scss';

require('./includes');

new Vue({
    el: '#base',
    render: h => h(Base),
    store: store,
    router: router,
    i18n,
});
