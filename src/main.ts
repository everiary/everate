import { createApp } from 'vue'
import pinia from "./stores/index";
import App from './App.vue'
import 'uno.css'
import { useRegisterSW } from 'virtual:pwa-register/vue';

useRegisterSW({
    // 每小时检查一次
    onRegistered: r => r && setInterval(async () => await r.update(), 3600000),
    // 注册失败则报错到 console
    onRegisterError: error => console.error(error)
});

const app = createApp(App)
app.use(pinia);

app.mount('#app')
