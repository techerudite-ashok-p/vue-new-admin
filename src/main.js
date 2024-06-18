import App from "@/App.vue";
import { registerPlugins } from "@core/utils/plugins";
import { provideApolloClient } from "@vue/apollo-composable";
import { createApp } from "vue";
import apolloClient from "./config/apollo";

// Styles
import "@core/scss/template/index.scss";
import "@styles/styles.scss";

// Create vue app
const app = createApp(App);
// const pinia = createPinia();
// app.use(pinia);

// Provide Apollo Client instance
provideApolloClient(apolloClient);

// Register plugins
registerPlugins(app);

// Mount vue app
app.mount("#app");
