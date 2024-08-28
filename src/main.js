import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';  // Asegúrate de que esta línea esté presente
import '@fortawesome/fontawesome-free/css/all.css'; // Importar Font Awesome

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
