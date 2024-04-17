import App from './App.svelte';
import { CloudLogger } from '@viovnl/cloudlogger';

CloudLogger.Create('your_project_secret');
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;