/**
 * Created by zhongzikuli <hgb102xlg@126.com> on 18/6/10.
 */
import router from './router'
import store from './store'


const whiteList = ['/home','/about','/login','/sign','/sign/step1','/sign/step2','/sign/step3','/forgetPassword','/goodsDetail'];

router.beforeEach((to,from,next) => {
  /*if (store.getters.access_token) { // determine if there has token
    /!* has token*!/
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(res => {
          const roles = res.roles
          next({...to,replace: true})
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            next({path: '/login'})
          })
        })
      } else {
        next()
      }
    }
  } else {*/
  /* has no token*/
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next('/login')
  }
  /* }**/
})

