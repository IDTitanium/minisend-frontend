import Vue from "vue";
import Router from "vue-router";

const Dashboard = () => import("./components/Dashboard.vue");
const Home = () => import("./components/Home.vue");
const EmailList = () => import("./components/EmailList.vue");

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/emails",
      name: "emails",
      component: EmailList,
      meta: {
        title: "Emails",
      },
    }
  ],
});

export default router;
