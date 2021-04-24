import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//配置一级路由
import Index from "@/view/Index";
import Login from "@/view/Login";
//配置二级路由
import NowData from "@/view/NowData";
import User from "@/view/User";
import Consumption from "@/view/Consumption";
import Advance from "@/view/Advance";
import Payment from "@/view/Payment";
import Item from "@/view/Item";
import aa from "@/view/aa";
const routes = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      title: "登录雅颜",
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录雅颜",
    },
  },
  {
    path: "*",
    redirect: "/login",
  },
];
export let data1 = [
  {
    path: "/index",
    component: Index,
    redirect: "/index/nowdata",
    children: [
      {
        path: "nowdata",
        component: NowData,
        meta: {
          title: "实时数据",
        },
      },
      {
        path: "consumption",
        component: Consumption,
        meta: {
          title: "消费记录",
        },
      },
      {
        path: "advance",
        component: Advance,
        meta: {
          title: "预约记录",
        },
      },
    ],
  },
];
let data2 = [
  {
    path: "/index",
    component: Index,
    redirect: "/index/nowdata",
    children: [
      {
        path: "nowdata",
        component: NowData,
        meta: {
          title: "实时数据",
        },
      },
      {
        path: "user",
        component: User,
        meta: {
          title: "用户信息",
        },
      },
      {
        path: "consumption",
        component: Consumption,
        meta: {
          title: "消费记录",
        },
      },
      {
        path: "advance",
        component: Advance,
        meta: {
          title: "预约记录",
        },
      },
      {
        path: "payment",
        component: Payment,
        meta: {
          title: "资金管理",
        },
      },
      {
        path: "Item",
        component: Item,
        meta: {
          title: "服务项目",
        },
      },
      {
        path: "aa",
        component: aa,
        meta: {
          title: "",
        },
      },
    ],
  },
];
console.log(data1, data2);
const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  let token = sessionStorage.getItem("token");
  if (token) {
    next();
  } else {
    to.path === "/login" ? next() : next({ path: "/login" });
  }
});

export default router;
