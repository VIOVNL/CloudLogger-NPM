import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import {CloudLogger} from "@viovnl/cloudlogger";

CloudLogger.Create("your_project_secret");

createApp(App).use(store).mount('#app')
