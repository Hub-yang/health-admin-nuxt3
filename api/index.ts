/**
 * 用户登录
 * @author HuberyYang
 * @date 2023-12-12
 * @param {any} body {username:用户名,password:密码}
 */
export function login(body: anyKey = {}) {
  return $fetch(
    '/api/login',
    {
      method: 'POST',
      body,
    },
  )
}

/**
 * 用户注册
 * @author HuberyYang
 * @date 2023-12-13
 * @param {any} body {username:用户名,password:密码}
 */
export function register(body: anyKey = {}) {
  return $fetch('/api/register', {
    method: 'POST',
    body,
  })
}

/**
 * 检测重名
 * @author HuberyYang
 * @date 2023-12-14
 * @param {any} username 用户名
 */
export function checkName(username: string) {
  return $fetch(`/api/checkName?username=${username}`, {
    method: 'GET',
  })
}

/**
 * 新增数据
 * @author HuberyYang
 * @date 2024-02-09
 */
export function addweight(body = {}) {
  return $fetch('/api/addweight', {
    method: 'POST',
    body,
  })
}

/**
 * 删除数据
 * @author HuberyYang
 * @date 2024-02-09
 */
export function delData(body = {}) {
  return $fetch('/api/delData', {
    method: 'POST',
    body,
  })
}

/**
 * 获取列表数据
 * @author HuberyYang
 * @date 2024-02-09
 */
export function getTableList(body = {}) {
  return $fetch('/api/getTableList', {
    method: 'POST',
    body,
  })
}

/**
 * 更新数据
 * @author HuberyYang
 * @date 2024-02-09
 */
export function updateWeight(body = {}) {
  return $fetch('/api/updateWeight', {
    method: 'POST',
    body,
  })
}

// 获取天气(和风天气API:北京)
export function getWeather() {
  return $fetch(
    'https://devapi.qweather.com/v7/weather/now?location=101010100&key=5649bab4e85c4ab0a8d82c7d86867fe3',
  )
}

// 获取用户数据
export function getAllChartsData({ uid, year }: anyKey) {
  return $fetch(`/api/getAllChartsData?uid=${uid}&year=${year}`)
}
