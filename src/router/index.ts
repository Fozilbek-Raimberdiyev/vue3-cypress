// import { h, resolveComponent } from "vue";
import { createRouter, createWebHistory, Router } from "vue-router";

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: () => import("@/layouts/Default.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/views/home/Index.vue"),
        },
      ],
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
    },
  ],
});

export default router;
