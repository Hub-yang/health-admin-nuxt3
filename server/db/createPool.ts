import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
  host: '82.157.148.19',
  // host: "localhost",
  port: 3306,
  user: 'health_admin_db',
  password: '19981009YS',
  database: 'health_admin_db',
  connectionLimit: 16,
})
