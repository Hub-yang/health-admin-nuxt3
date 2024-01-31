/**
 * 用户登录
 * @author HuberyYang
 * @date 2023-12-12
 * @param {any} data {username:用户名,password:密码}
 */
export function login(data: anyKey) {
  return useFetch('/api/login', {
    method: 'POST',
    body: data,
  })
}

/**
 * 用户注册
 * @author HuberyYang
 * @date 2023-12-13
 * @param {any} data {username:用户名,password:密码}
 */
export function register(data: anyKey) {
  return useFetch('/api/register', {
    method: 'POST',
    body: data,
  })
}

/**
 * 检测重名
 * @author HuberyYang
 * @date 2023-12-14
 * @param {any} username 用户名
 */
export function checkName(username: string) {
  return useFetch(`/api/checkName?username=${username}`, {
    method: 'GET',
  })
}
