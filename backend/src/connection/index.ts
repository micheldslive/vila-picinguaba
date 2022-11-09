import { ConnectionProps } from './types'
import { Produtos } from 'src/entities/produtos.entity'
import { Categorias } from 'src/entities/categorias.entity'
import { Imagens } from 'src/entities/imagens.entity'

const HOST = process.env.MYSQL_HOST || 'picinguaba-db'
const USER = process.env.MYSQL_USER || 'root'
const PASS = process.env.MYSQL_PASS || 'picinguaba123'
const DATA = process.env.MYSQL_DATA || 'picinguaba'

export const connection: ConnectionProps = {
  type: 'mysql',
  host: HOST,
  port: 3306,
  username: USER,
  password: PASS,
  database: DATA,
  entities: [Produtos, Categorias, Imagens],
  migrations: ['src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migration',
  },
  synchronize: true,
}
