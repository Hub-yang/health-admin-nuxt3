import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { uid, year } = getQuery(event)
  const [res] = await pool.execute('SELECT squatCount FROM base_kpi WHERE uid=? AND year=?', [uid, year]) as any[]
  const total = res[0]?.squatCount || 0
  return total
})
