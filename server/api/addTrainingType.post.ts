export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  if (!data) {
    return {
      code: 201,
      msg: '参数为空',
    }
  }

  // const year = new Date().getFullYear()
  // const sqlToInsert = 'INSERT INTO my_weight SET year=?, date=?, weight=?, training=?, sportTime=?, caloric=?, uid=?'
  // const params = [year, data?.date || '', data?.weight || '', data?.training || '', data?.sportTime || '', data?.caloric || '', data?.uid || '']

  // const [result = {}] = await pool.execute(sqlToInsert, params) as anyKey[]
  // if (result?.affectedRows && result?.affectedRows > 0) {
  //   return {
  //     code: 200,
  //     msg: '添加成功',
  //   }
  // }
  // else {
  //   return {
  //     code: 301,
  //     msg: '添加失败',
  //   }
  // }
})
