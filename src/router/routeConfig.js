import AsyncComponent from '../util/asyncComponent'

const Login = AsyncComponent(() => import('../views/MainLayOut/Login'))
const Home = AsyncComponent(() => import('../views//Home/Home'))
const ErrorPage = AsyncComponent(() => import('../views/404/ErrorPage'))
const MainLayOut = AsyncComponent(() => import('../views/MainLayOut/MainLayOut'))
const HomeIndexPage = AsyncComponent(() => import('../views/Home/HomeIndexPage'))
const ArticleList = AsyncComponent(() => import('../views/Home/ArticleList'))
const MainHome = AsyncComponent(() => import('../views/MainLayOut/MainHome'))
const DetailPage = AsyncComponent(() => import('../views/Home/DetailPage'))


const routes = [
  {
    path: '/home',
    // exact: true,
    component: Home,
    routes: [
      { path: '/home', component: HomeIndexPage, exact: true },
      { path: '/home/archives/:listType', component: ArticleList, exact: true },
      { path: '/home/detail/:caseId', component: DetailPage, exact: true }
    ]
  },
  {
    path: '/404',
    exact: true,
    component: ErrorPage
  },
  {
    path: '/mainlayout',
    component: MainLayOut,
    routes: [
      { path: '/mainlayout', exact: true, component: MainHome },
      { path: '/mainlayout/login', exact: true, component: Login }
    ]
  }
]

export default routes