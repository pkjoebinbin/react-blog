import AsyncComponent from '../util/asyncComponent'

const Login = AsyncComponent(() => import('../views/login/Login'))

const routes = [
  {
    path: '/',
    component: Login
  }
]

export default routes