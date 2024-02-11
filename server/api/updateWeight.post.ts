import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  if (!data) {
    return {
      code: 201,
      msg: '参数为空',
    }
  }
  const sql
      = 'UPDATE my_weight SET weight = ?,caloric = ?,sporttime = ? WHERE date = ? AND uid = ?'
  const params = [data?.weight || '', data?.caloric || '', data?.trainingTime || '', data?.date || '', data?.uid || '']
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
