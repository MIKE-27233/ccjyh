import Vue from 'vue'
import VueRouter from 'vue-router'
// import Interaction from '../views/interaction.vue'
// import Ruku from '../views/ruku.vue'
// import Rukumingxi from '../components/ruku/rukumingxi.vue'
// import Rukutongji from '../components/ruku/rukutongji.vue'
// import Choosetime from '../components/ruku/choosetime.vue'
// import DCLRW from '../components/1daichulirenwu.vue'
// import XSJD from '../components/2xiaoshoujindu.vue'
// import CLRW from '../components/4chenlierenwu.vue'
// import QSRW from '../components/5qianshourenwu.vue'
// import ZDHD from '../components/6zhongduanhuodong.vue'
// import WDXY from '../components/7wodexieyi.vue'
// import WDHB from '../components/8wodehongbao.vue'
// import YXHB from '../components/9yanxihongbao.vue'
// import HYZX from '../components/10huiyuanzhongxin.vue'
// import YQYL from '../components/11yaoqingyouli.vue'
// import CJHD from '../components/12chunjiehuodong.vue'
// import YXTB from '../components/13yanxitibao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // import Home from '../views/homepage.vue'
    component: () => import('../views/homepage.vue')
  },
  {
    path: '/search',
    name: 'Search',
    // import Search from '../views/search.vue'
    component: () => import('../views/search.vue')

  },
  {
    path: '/interaction',
    name: 'Interaction',
    
    component: () => import('../views/interaction.vue')

    // component: Interaction
  },
  {
    path: '/main',
    name: 'Main',
    // import Main from '../views/main.vue'
    component: () => import('../views/main.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/singin',
    name: 'Singin',
    // import Search from '../views/search.vue'
    component: () => import('../views/login/singin.vue')
  },
  {
    path: '/ruku',
    name: 'Ruku',
    component: () => import('../views/ruku.vue'),
    children:[ 
      {
        path: '/rukumingxi',
        name: 'Rukumingxi',
        component: ()=> import('../components/ruku/rukumingxi.vue')
      },
      {
        path: '/rukutongji',
        name: 'Rukutongji',
        component: ()=> import('../components/ruku/rukutongji.vue')
      },
    ]
  },  
  {
    path: '/choosetime',
    name: 'Choosetime',
    component: ()=> import('../components/ruku/choosetime.vue')
  },
  {
    path: '/dclrw',
    name: 'DCLRW',
    component: ()=> import('../components/1daichulirenwu.vue')
  },
  {
    path: '/xsjd',
    name: 'XSJD',
    component: ()=>import("../components/2xiaoshoujindu.vue")
  },
  {
    path: '/clrw',
    name: 'CLRW',
    component: ()=> import("../components/4chenlierenwu.vue")
  },
  {
    path: '/qsrw',
    name: 'QSRW',
    component: ()=> import("../components/5qianshourenwu.vue")
  },
  {
    path: '/zdhd',
    name: 'ZDHD',
    component: ()=> import("../components/6zhongduanhuodong.vue")
  },
  {
    path: '/wdxy',
    name: 'WDXY',
    component: ()=> import("../components/7wodexieyi.vue")
  },
  {
    path: '/wdhb',
    name: 'WDHB',
    component: ()=> import("../components/8wodehongbao.vue")
  },
  {
    path: '/yxhb',
    name: 'YXHB',
    component: ()=> import("../components/9yanxihongbao.vue")
  },
  {
    path: '/hyzx',
    name: 'HYZX',
    component: ()=> import("../components/10huiyuanzhongxin.vue")
  },
  {
    path: '/yqyl',
    name: 'YQYL',
    component: ()=> import("../components/11yaoqingyouli.vue")
  },
  {
    path: '/cjhd',
    name: 'CJHD',
    component: ()=> import("../components/12chunjiehuodong.vue")
  },
  {
    path: '/yxtb',
    name: 'YXTB',
    component: ()=> import("../components/13yanxitibao.vue")
  },
  {
    path: '/white',
    name: 'white',
    component: ()=> import("../components/white.vue")
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
