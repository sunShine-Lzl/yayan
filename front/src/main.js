import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/element-reset.css";
import locale from 'element-ui/lib/locale/lang/zh-CN'
Vue.config.productionTip = false;

import router from "./router/index";
import "./assets/css/uitl.css";

Vue.use(ElementUI, { locale });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
