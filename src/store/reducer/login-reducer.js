const loginInfo = {
  userName: 'zoubin',
  password: '123123'
}

export function loginSuccess (state = loginInfo, actions) {
  switch (actions.type) {
    case 'login/LOGIN':
      return state
    default:
      return state
  }
}