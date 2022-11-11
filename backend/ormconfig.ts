import { DataSource } from 'typeorm'
import mysqldump from 'mysqldump'

const host = process.env.MYSQL_USER || 'picinguaba-db'
const user = process.env.MYSQL_USER || 'root'
const password = process.env.MYSQL_PASS || 'picinguaba123'
const database = process.env.MYSQL_DATA || 'picinguaba'

export const connection = {
  host,
  user,
  password,
  database,
}

export const AppDataSource = new DataSource({
  type: 'mysql',
  host,
  port: 3306,
  username: user,
  password,
  database,
  entities: ['dist/**/*.entity.js'],
  logging: false,
  synchronize: true,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'history',
})

export const mysqlDump = () =>
  mysqldump({
    connection,
    dumpToFile: './src/dump/mysqldump.sql',
  })
