import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { date = '', uid = '' } = await readBody(event)
  if (!date) {
    return {
      code: 201,
      msg: '参数为空',
    }
  }
  const sql = 'DELETE FROM my_weight WHERE date = ? AND uid = ?'
  const [result = {}] = await pool.execute(sql, [date, uid]) as any[]
  if (result?.affectedRows && result?.affectedRows > 0) {
    return {
      code: 200,
      msg: '删除成功',
    }
  }
  else {
    return {
      code: 301,
      msg: '删除失败',
    }
  }
})
