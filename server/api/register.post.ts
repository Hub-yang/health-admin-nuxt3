import { nanoid } from 'nanoid'
import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { username: $uname, password: $upwd } = await readBody(event)
  const sql = 'select * from users where username = ?'

  const [rows] = await pool.execute(sql, [$uname]) as anyKey[][]
  if (rows && rows.length) {
    return {
      code: 201,
      msg: '当前用户名已存在',
    }
  }
  else {
    // 生成uid
    const $uid = nanoid()
    const sql2 = 'INSERT INTO users ( username , password , uid ) VALUES ( ? , ? , ?)'
    const [fields] = await pool.execute(sql2, [$uname, $upwd, $uid]) as any[]
    if (fields.affectedRows) {
      return {
        code: 200,
        msg: '注册成功',
      }
    }
    else {
      return {
        code: 204,
        msg: '注册失败',
      }
    }
  }
})
