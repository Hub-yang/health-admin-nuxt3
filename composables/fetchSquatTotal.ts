import { getSquatTotal } from '~/api'

export function fetchSquatTotal() {
  const squatTotal = useState('squatTotal', () => 0)
  const uid = (useStorage().getItem(USERINFO_KEY) as any)?.uid || ''
  const year = useState('year')
  async function getValue() {
    squatTotal.value = await getSquatTotal({ uid, year: year.value }) as number
  }

  return {
    getValue,
  }
}
