export function useStorage() {
  function getItem(key: string) {
    return useCookie(key)
  }

  function setItems(key: string | anyKey, value?: any) {
    if (typeof key === 'object' && !Object.keys(key).length)
      return false
    if (typeof key === 'string')
      useCookie(key).value = value
    else
      Object.keys(key).forEach(k => useCookie(k).value = key[k])
    return true
  }

  function removeItems(...keys: string[]) {
    keys = keys || []
    keys.forEach(k => useCookie(k).value = null)
  }

  return {
    getItem,
    setItems,
    removeItems,
  }
}
