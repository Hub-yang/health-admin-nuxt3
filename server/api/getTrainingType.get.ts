import { pool } from '../db/createPool'

export default defineEventHandler(async () => {
  const getTotalSql = 'SELECT * FROM training_option'
  const [res] = await pool.query(getTotalSql) as [][]
  return res
})
