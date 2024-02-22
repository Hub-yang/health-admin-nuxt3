export default defineNuxtRouteMiddleware((to) => {
  const token = useStorage().getItem(TOKEN_KEY)
  if (token) {
    if (to.path === '/login')
      return navigateTo('/dashBoard')
  }
  else {
    if (to.path !== '/login')
      return navigateTo('/login', { replace: true })
  }
})
