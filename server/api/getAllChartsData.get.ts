import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { uid, year } = getQuery(event)
  const sql = 'select * from my_weight WHERE uid=? AND year=?'
  const [rows] = await pool.execute(sql, [uid, year]) as any[][]
  if (rows && rows.length)
    return rows
  else
    return []
})
