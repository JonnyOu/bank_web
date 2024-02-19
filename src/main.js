import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import i18n from '@/locales/index.js';
import router from '@/router';
import store from '@/store';

// 添加tailwindcss
import '@/index.css';

// 添加路由相关配置
import '@/router/permission';

const app = createApp(App);

app.use(i18n).use(router).use(store);

app.mount('#app');
