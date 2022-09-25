import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import HelloWord from './components/HelloWorld.vue'
import ArticleComponent from './components/ArticleComponent.vue'
import BlogComponent from './components/BlogComponent.vue'
import FormComponent from './components/FormComponent.vue'
import MyComponent from './components/MyComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'

const routes = [
    {path: '/', component: ArticleComponent},
    {path: '/home', component: ArticleComponent},
    {path: '/blog', component: BlogComponent},
    {path: '/Form', component: FormComponent},
    {path: '/HelloWorld', component: HelloWord},
    {path: '/MyComponent', component: MyComponent},
    { path: '/:pathMatch(.*)*', component: ErrorComponent},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

const app = createApp(App);
app.use(router);
app.mount('#app');

