import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import NotFound from "../views/NotFound.vue"
import Details from "../views/Details.vue"
import Create from "../views/Create.vue"
import Tag from "../views/Tag.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/404",
            name: "NotFound",
            component: NotFound,
        },
        {
            path: "/posts/:id",
            name: "Details",
            component: Details,
            props: true,
        },
        {
            path: "/create",
            name: "Create",
            component: Create,
        },
        {
            path: "/tags/:tag",
            name: "Tag",
            component: Tag,
            props: true,
        },
    ],
})

export default router
