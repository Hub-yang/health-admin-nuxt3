import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
  host: '82.157.148.19',
  port: 3306,
  user: 'huberyyang',
  password: '19981009ys.',
  database: 'health-admin-db',
  connectionLimit: 16,
})
