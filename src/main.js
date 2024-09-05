import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import store from '@/store/index'
const app = createApp(App);

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => response,
    async error => {
        const token = localStorage.getItem("token");
        if (error.response && error.response.status === 401 && token!=null) {
            try {
                localStorage.clear();
                alert("토큰이 만료되었습니다 재로그인 해주세요!!")
                window.location.href = "/login";
            } catch (e) {
                console.log(e.response);
            }
        }
        return Promise.reject(error);
    }
);
app.use(store);
app.use(router);
app.use(vuetify);
app.mount('#app');
