import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  let { page, pageSize, uid: $uid } = await readBody(event)
  if (!page) {
    return {
      code: 201,
      msg: '请传入参数page',
    }
  }
  pageSize = +pageSize || 20
  const start = (page - 1) * pageSize
  const sql = `SELECT * FROM my_weight WHERE uid=? ORDER BY date DESC limit ${pageSize} OFFSET ${start}`
  const [rows] = await pool.execute(sql, [$uid]) as any[][]
  if (rows && rows.length) {
    return {
      code: 200,
      msg: '操作成功',
      tableInfo: { currentPage: page, data: rows },
    }
  }
})
