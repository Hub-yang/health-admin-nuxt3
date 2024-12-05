import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  let { value = '', uid = '', year = '' } = await readBody(event)
  if (!value || !uid || !year) {
    return {
      code: 201,
      msg: '参数为空',
    }
  }

  const sqlToInsert = 'UPDATE base_kpi SET squatCount = ? WHERE uid = ? AND year = ?'
  // 获取当前总数
  const [res] = await pool.execute('SELECT squatCount FROM base_kpi WHERE uid=? AND year=?', [uid, year]) as any[]
  const total = res[0]?.squatCount || 0
  value = total + +value

  const [result = {}] = await pool.execute(sqlToInsert, [value, uid, year]) as anyKey[]
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
