export function fetchTotal() {
  const year = useState('year')
  const total = useState('total', () => 0)
  const uid = (useStorage().getItem(USERINFO_KEY) as any)?.uid || ''

  async function refreshTotal() {
    const data = await getTotal({ uid, year: year.value })
    total.value = data || 0
  }

  return {
    refreshTotal,
  }
}
