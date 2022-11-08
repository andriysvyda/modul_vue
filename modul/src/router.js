import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "@/pages/Home"
import About from "@/pages/About"
import Games from "@/pages/Games"


const routes =[
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/games', component: Games, name: 'games'},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router