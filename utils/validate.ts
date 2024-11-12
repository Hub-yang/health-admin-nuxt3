export function validatePassword(psd: string) {
  const reg = /^(?!\d+$)(?![a-z]+$)[a-z0-9]{6,12}$/i
  return reg.test(psd)
}
