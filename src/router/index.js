import Vue from 'vue';
import Router from 'vue-router';

const index = resolve => require(['@/pages/index'],resolve);
const login = resolve => require(['@/pages/login/index'],resolve);
const sign = resolve => require(['@/pages/sign/index'],resolve);
const step1 = resolve => require(['@/pages/sign/step1'],resolve);
const step2 = resolve => require(['@/pages/sign/step2'],resolve);
const step3 = resolve => require(['@/pages/sign/step3'],resolve);
const protocol = resolve => require(['@/pages/protocol/index'],resolve);
const forgetPassword = resolve => require(['@/pages/forgetPassword/index'],resolve);
const home = resolve => require(['@/pages/home/index'],resolve);
const about = resolve => require(['@/pages/about/index'],resolve);

const account = resolve => require(['@/pages/account/index'],resolve);
const cart = resolve => require(['@/pages/cart/index'],resolve);
const goodsDetail = resolve => require(['@/pages/goodsDetail/index'],resolve);
const order = resolve => require(['@/pages/order/index'],resolve);
const orderDetail = resolve => require(['@/pages/orderDetail/index'],resolve);
const client = resolve => require(['@/pages/client/index'],resolve);
const confirmOrder = resolve => require(['@/pages/confirmOrder/index'],resolve);
const pay = resolve => require(['@/pages/pay/index'],resolve);


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: index,
    redirect: '/home',
    children: [
      {path: 'home',name: '首页',meta: {keepAlive: true},component: home},
      {path: 'login',name: '登录',component: login},
      {
        path: 'sign',name: '注册',component: sign,redirect: '/sign/step1',
        children: [
          {path: '/sign/step1',name: '注册1',component: step1},
          {path: '/sign/step2',name: '注册1',component: step2},
          {path: '/sign/step3',name: '注册1',component: step3}
        ]
      },
      {path: 'forgetPassword',name: '忘记密码',component: forgetPassword},
      {path: 'about',name: '关于南圈',component: about},
      {path: 'protocol',name: '关于南圈',component: protocol},
      {path: 'goodsDetail',query: {skuId: '',specNum: ''},name: '商品详情',component: goodsDetail},

      {path: 'client',name: '客户',component: client},
      {path: 'account',name: '账户',component: account},
      {path: 'cart',name: '进货单',component: cart},
      {path: 'order',name: '订单列表',component: order},
      {path: 'orderDetail',query: {orderNum: '',type: ''},name: '订单详情',component: orderDetail},
      {path: 'confirmOrder',query: {source: '',cartIds: ''},name: '确认订单',component: confirmOrder},
      {path: 'pay',query: {orders: ''},name: '订单支付',component: pay}
    ]
  }]
})
