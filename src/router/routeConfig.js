import AsyncComponent from '../util/asyncComponent'

const Login = AsyncComponent(() => import('../views/Login/Login'))
const Home = AsyncComponent(() => import('../views//Home/Home'))
const ErrorPage = AsyncComponent(() => import('../views/404/ErrorPage'))
const  MainLayOut = AsyncComponent(() => import('../views/MainLayOut/MainLayOut'))
const HomeIndexPage = AsyncComponent(() => import('../views/Home/HomeIndexPage'))
const ArticleList = AsyncComponent(() => import('../views/Home/ArticleList'))

const routes = [
  {
    path: '/home',
    // exact: true,
    component: Home,
    routes: [
      { path: '/home', component: HomeIndexPage, exact: true },
      { path: '/home/archives', component: ArticleList, exact: true },
      // { path: '/home', component: HomeIndexPage },
      // { path: '/home/archives', component: ArticleList },

    ]
  },
  {
    path: '/404',
    exact: true,
    component: ErrorPage
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/mainlayout',
    exact: true,
    component: MainLayOut
  }
]

export default routes