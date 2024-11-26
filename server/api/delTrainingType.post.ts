import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { type, uid, id } = await readBody(event)
  if (!type) {
    return {
      code: 201,
      msg: '参数为空',
    }
  }
  const sql = 'DELETE FROM training_option WHERE value=? AND uid=? AND id = ?'
  const [result = {}] = await pool.execute(sql, [type, uid, id]) as any[]
  if (result?.affectedRows && result?.affectedRows > 0) {
    return {
      code: 200,
      msg: '操作成功',
    }
  }
  else {
    return {
      code: 301,
      msg: '操作失败，请重试',
    }
  }
})
