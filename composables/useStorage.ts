export function useStorage() {
  function getItem(key: string): any {
    return useCookie(key).value
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

  function removeItems(...keys: any[]) {
    keys = (keys || []).flat(Number.POSITIVE_INFINITY)
    keys.forEach(k => useCookie(k).value = null)
  }

  return {
    getItem,
    setItems,
    removeItems,
  }
}
