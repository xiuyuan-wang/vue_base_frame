import { createApp } from 'vue';
// import { createPinia } from 'pinia'
// import pavue from '@pavue/api'
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

// 导入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/styles/index.scss'; // global css
import formCreate from '@form-create/element-ui';
import FcDesigner from '@form-create/designer';

import App from './App.vue';
import { key, store } from './stores/index.ts';
import router from './router/index.ts';

import SvgIcon from '@/components/SvgIcon/index.vue'; // svg component
import './permission'; // permission control
// import './assets/main.css'
// pavue()
const app = createApp(App);
// app.use(createPinia())
app.use(store, key);
app.use(router);
app.use(formCreate);
app.use(FcDesigner);
app.use(ElementPlus);

app.component('svg-icon', SvgIcon);

app.mount('#app');
