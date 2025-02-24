import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'styles/main.scss';

import clickAway from 'directives/clickAway.ts';

const pinia = createPinia();

import App from 'App.vue';

createApp(App).use(pinia).directive('click-away', clickAway).mount('#app');
