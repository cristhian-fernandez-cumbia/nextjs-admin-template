import mysql from 'mysql2/promise'; 

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function query<T = any>(query: string, values?: any[]): Promise<T[]> {
  try {
    const [results] = await pool.execute(query, values);
    return results as T[];
  } catch (error) {
    throw error;
  }
}

export default pool;