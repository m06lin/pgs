import Vue from 'vue';
import VueI18n from 'vue-i18n';

import tw from './language/tw.json';
import en from './language/en.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'tw',
  messages: { en, tw },
});

export default i18n;
