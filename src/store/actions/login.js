import * as type from '../actionType'

export function login (data) {
  return {
    type: type.login,
    data
  }
}