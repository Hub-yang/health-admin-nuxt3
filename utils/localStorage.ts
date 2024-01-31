export const token_key = '_TOKEN_'
export const user_name_key = '_USER_NAME_'
export const user_id_key = '_USER_ID_'

export function getItem(key: string) {
  return JSON.parse(localStorage.getItem(key) as string)
}

export function setItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function setItems(options: anyKey) {
  const entries = Object.entries(options)
  entries.forEach(([key, value]) =>
    setItem(key, value),
  )
}

export function removeItem(key: string) {
  localStorage.removeItem(key)
}

export function removeItems(keys: string[]) {
  keys.forEach(key =>
    removeItem(key),
  )
}
