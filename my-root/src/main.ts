import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp(App);

const ProfilePage = defineAsyncComponent(() => import('subApp/ProfilePage'));

app.component('ProfilePage', ProfilePage)

app.use(router)

app.mount('#app')
