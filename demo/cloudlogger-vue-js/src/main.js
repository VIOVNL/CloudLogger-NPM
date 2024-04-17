import { createApp } from 'vue'
import App from './App.vue'
import {CloudLogger} from "@viovnl/cloudlogger";

CloudLogger.Create("your_project_secret");

createApp(App).mount('#app')
