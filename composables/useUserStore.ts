export default defineStore('user', () => {
  const token = ref(getItem(token_key) || '')
  const userInfo = reactive({
    username: getItem(user_name_key) || '',
    uid: getItem(user_id_key) || '',
  })

  function setUserInfo({ token: freshToken, username, uid }: anyKey) {
    token.value = freshToken
    userInfo.username = username
    userInfo.uid = uid

    // 持久化存储
    const entries = {
      [token_key]: freshToken,
      [user_name_key]: username,
      [user_id_key]: uid,
    }
    setItems(entries)
  }

  async function logout() {
    reset()
    removeItems([token_key, user_name_key, user_id_key])
    await navigateTo('/login', { replace: true })
  }

  function reset() {
    token.value = ''
    userInfo.username = ''
    userInfo.uid = ''
  }

  return {
    token,
    userInfo,
    setUserInfo,
    logout,
  }
})
