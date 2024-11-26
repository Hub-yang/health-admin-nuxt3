import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { value, uid, id } = await readBody(event)
  if (!value || !uid) {
    return {
      code: 201,
      msg: '参数缺失',
    }
  }
  const sql
      = 'UPDATE training_option SET value = ? WHERE uid = ? AND id = ?'
  const params = [value, uid, id]
  const [result = {}] = await pool.execute(sql, params) as anyKey[]
  if (result?.affectedRows > 0) {
    return {
      code: 200,
      msg: '更新成功',
    }
  }
  else {
    return {
      code: 301,
      msg: '更新失败',
    }
  }
})
