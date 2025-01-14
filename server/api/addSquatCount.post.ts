import { pool } from '../db/createPool'

export default defineEventHandler(async (event) => {
  let { value = '', uid = '', year = '' } = await readBody(event)
  if (!value || !uid || !year) {
    return {
      code: 201,
      msg: '参数为空',
    }
  }

  let result: any[] = []

  // 获取当前总数,有值更新，没值插入
  const [res] = await pool.execute('SELECT squatCount FROM base_kpi WHERE uid=? AND year=?', [uid, year]) as any[]
  if (!res.length) {
    const sqlToInsert = 'INSERT INTO base_kpi ( squatCount , uid , year ) VALUES ( ? , ? , ?)'
    result = await pool.execute(sqlToInsert, [value, uid, year]) as anyKey[]
  }
  else {
    const sqlToInsert = 'UPDATE base_kpi SET squatCount = ? WHERE uid = ? AND year = ?'
    const [res] = await pool.execute('SELECT squatCount FROM base_kpi WHERE uid=? AND year=?', [uid, year]) as any[]
    const total = res[0]?.squatCount || 0
    value = total + +value
    result = await pool.execute(sqlToInsert, [value, uid, year]) as anyKey[]
  }
  if (result[0]?.affectedRows && result[0]?.affectedRows > 0) {
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
