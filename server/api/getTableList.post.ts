/* eslint-disable prefer-const */
import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  let { pageNum, pageSize, uid: $uid, year: $year } = await readBody(event)
  if (!pageNum) {
    return {
      code: 201,
      msg: '请传入参数page',
    }
  }
  pageSize = +pageSize || 10
  pageNum = +pageNum || 1
  let total = 0
  const startIndex = (pageNum - 1) * pageSize

  // get total
  const getTotalSql = 'SELECT COUNT(*) AS total FROM my_weight WHERE uid=? AND year=?'
  const [res] = await pool.query(getTotalSql, [$uid, $year]) as any[][]
  total = res?.[0]?.total || 0

  // get list
  const sql = `SELECT * FROM my_weight WHERE uid=? AND year=? ORDER BY date DESC LIMIT ${startIndex}, ${pageSize}`
  const [rows] = await pool.execute(sql, [$uid, $year]) as any[][]
  if (rows && rows.length) {
    return {
      code: 200,
      msg: '操作成功',
      tableInfo: { data: rows, total },
    }
  }
})
