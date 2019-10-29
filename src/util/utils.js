export function setCookie (name, value) {
  const Days = 30
  const exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';path=/'
}

export function getCookie (name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr
  return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
}

export function delCookie (name) {
  setCookie(name, '')
}
