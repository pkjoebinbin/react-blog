import AsyncComponent from '../util/asyncComponent'

const Login = AsyncComponent(() => import('../views/login/Login'))
const Index = AsyncComponent(() => import('../views/index/Index'))
const ErrorPage = AsyncComponent(() => import('../views/404/ErrorPage'))

const routes = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/404',
    component: ErrorPage
  }
]

export default routes