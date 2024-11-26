import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { value, uid } = await readBody(event)
  if (!value || !uid) {
    return {
      code: 201,
      msg: '参数缺失',
    }
  }

  const sqlToInsert = 'INSERT INTO training_option SET value=?, uid=?'
  const [result = {}] = await pool.execute(sqlToInsert, [value, uid]) as anyKey[]
  if (result?.affectedRows && result?.affectedRows > 0) {
    return {
      code: 200,
      msg: '添加成功',
    }
  }
  else {
    return {
      code: 301,
      msg: '添加失败',
    }
  }
})
