import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// if (window.__POWERED_BY_QIANKUN__) {
//     window.vueApp = createApp(App);
//   } else {
    // If not running in Qiankun, mount normally
    createApp(App).mount('#app');
//   }
