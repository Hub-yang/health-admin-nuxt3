import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { uid } = getQuery(event)
  const getTotalSql = 'SELECT * FROM training_option where uid=?'
  const [res] = await pool.query(getTotalSql, [uid]) as [][]
  return res
})
