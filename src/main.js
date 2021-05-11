import { createApp } from 'vue'
import App from './App.vue'

import mailgo from "mailgo";

const mailgoConfig = {
    dark: false,
    showFooter: false
};

mailgo(mailgoConfig);

createApp(App).mount('#app')
