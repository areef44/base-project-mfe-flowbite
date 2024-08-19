import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp(App);

app.use(router)
app.mount('#app')
