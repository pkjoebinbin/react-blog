import AsyncComponent from '../util/asyncComponent'

const Login = AsyncComponent(() => import('../views/Login/Login'))
const Home = AsyncComponent(() => import('../views//Home/Home'))
const ErrorPage = AsyncComponent(() => import('../views/404/ErrorPage'))
const  Mainlayout = AsyncComponent(() => import('../views/Mainlayout/Mainlayout'))

const routes = [
  {
    path: '/home',
    exact: true,
    component: Home
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
    component: Mainlayout
  }
]

export default routes