import { DataSource } from 'typeorm'
import mysqldump from 'mysqldump'

const host = process.env.MYSQL_HOST
const username = process.env.MYSQL_USER
const password = process.env.MYSQL_PASS
const database = process.env.MYSQL_DATA

export const connection = {
  host,
  user: username,
  password,
  database,
}

export const AppDataSource = new DataSource({
  type: 'mysql',
  host,
  port: 3306,
  username,
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
