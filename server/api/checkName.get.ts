import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { username } = getQuery(event)
  const sql = 'select * from users where username = ?'
  const [rows] = await pool.execute(sql, [username]) as anyKey[][]

  if (rows && rows.length) {
    return {
      code: 204,
      msg: '当前用户名已存在',
    }
  }
  else {
    return {
      code: 200,
    }
  }
})
