import Vue from 'vue';
import App from './App.vue';
import { firestorePlugin } from 'vuefire';
import VueRouter from 'vue-router';
import VueCompositionApi from '@vue/composition-api';
import './assets/css/app.css';

Vue.config.productionTip = false;

Vue.use(firestorePlugin);
Vue.use(VueRouter);
Vue.use(VueCompositionApi);

import Home from './components/Home';
import ChatRoom from './components/ChatRoom';

const router = new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'chat',
            path: '/chats/:id',
            component: ChatRoom
        }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
