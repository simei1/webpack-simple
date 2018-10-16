import Vue from 'vue';
import VueI18N from 'vue-i18n';

Vue.use(VueI18N);

const messages = {
    de: {

    }
};

const i18n = new VueI18N({
    locale: 'de',
    messages
});

export default i18n;
