import { createSSRApp } from "vue";
import { setupRouter } from "@helpers/router";
import App from "./App.vue";
import setupPinia from "./store";
import { setupI18n } from "./locales";

console.log(import.meta.env);

export function createApp() {
	const app = createSSRApp(App);
	const router = setupRouter(app);
	setupPinia(app);
	setupI18n(app);

	// 扩展的router方法
	router.onBeforeEach((options, previous) => {
		console.log("onBeforeEach", options, previous);
	});

	return {
		app,
	};
}
