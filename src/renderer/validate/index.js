import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import tw from 'vee-validate/dist/locale/zh_TW';
import en from 'vee-validate/dist/locale/en';
import i18n from '../i18n';

Vue.use(
  VeeValidate,
  {
    i18n,
    i18nRootKey: 'validations',
    dictionary: { tw, en },
  },
);

Validator.extend('specailtype', {
  getMessage: filed => `${filed} not @!^&`,
  validate: value => /[^-@]*/.test(value),
});

export default VeeValidate;
