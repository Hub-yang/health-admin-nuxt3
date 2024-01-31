import jwt from 'jsonwebtoken'
import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  const { username: $uname, password: $upwd } = await readBody(event)
  // 使用promise风格mysql2
  const sql = 'select * from users where username = ? and password = ? '
  const [rows] = await pool.execute(sql, [$uname, $upwd]) as anyKey[][]

  if (rows && rows.length) {
    const token = jwt.sign({ id: rows[0].id }, 'secret')
    const data = {
      username: rows[0].username,
      uid: rows[0].uid,
      token,
    }

    return {
      code: 200,
      msg: '登录成功',
      data,
    }
  }
  else {
    return {
      code: 204,
      msg: '用户名或密码错误',
    }
  }
})
