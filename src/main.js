import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import Auth from './components/Auth.vue'
import Todo from './components/Todo.vue'
import User from './components/User.vue'
import App from './App.vue'

const routes = [
    {path:'/',component: Auth},
    {path:'/user',component: User},
    {path:'/todo',component: Todo}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
