export const LOGIN = 'login/LOGIN'

export function login (request) {
  return {
    type: LOGIN,
    payload: request
  }
}