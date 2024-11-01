import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { uid, year } = getQuery(event)
  const getTotalSql = 'SELECT COUNT(*) AS total FROM my_weight WHERE uid=? AND year=?'
  const [res] = await pool.query(getTotalSql, [uid, year]) as anyKey[][]
  const total = res?.[0]?.total || 0
  return total
})
