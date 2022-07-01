import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Analytics from "../views/AnalyticsPage.vue";
import Auth from "../views/AuthPage.vue";
import Main from "../layouts/main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: Main,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "analytics",
        component: Analytics,
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("leadhit-site-id");
  if (token) {
    next();
  } else {
    if (to.name !== "auth") {
      next({ name: "auth" });
    } else {
      next();
    }
  }
});

export default router;
