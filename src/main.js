import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './locales/index.js';
import router from './router';
import './index.css';

const app = createApp(App);

app.use(i18n).use(router);

app.mount('#app');
