export function validatePassword(psd: string) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,12}$/
  return reg.test(psd)
}
