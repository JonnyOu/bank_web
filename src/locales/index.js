import { createI18n } from 'vue-i18n';
import en_US from './en_US.js';
import zh_CN from './zh_CN.js';
import zh_HK from './zh_HK.js';

const messages = {
  en_US,
  zh_CN,
  zh_HK
};

const i18n = createI18n({
  legacy: false,         // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, //全局生效$t
  locale: 'zh_CN',       // 默认cn翻译
  messages               //ES6解构
})

export default i18n;