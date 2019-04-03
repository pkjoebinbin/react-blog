import AsyncComponent from '../util/asyncComponent'

const Login = AsyncComponent(() => import('../views/login/Login'))

const routes = [
  {
    path: '/login',
    component: Login
  }
]

export default routes