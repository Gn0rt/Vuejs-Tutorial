import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Home from "../views/Home.vue";
import AboutUS from "@/views/AboutUS.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            name: "home",
            redirect: "/",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About,
            children: [
                { path: "us", name: "us", component: AboutUS }
            ]
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
})

export default router;