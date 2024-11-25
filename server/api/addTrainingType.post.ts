import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const data = await readBody(event)

  if ((Array.isArray(data) && !data.length) || !data) {
    return {
      code: 400,
      msg: '参数错误，请重试',
    }
  }

  const sqlToInsert = 'INSERT INTO training_option SET value=?'

  const [result = {}] = await pool.execute(sqlToInsert, data) as anyKey[]
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
