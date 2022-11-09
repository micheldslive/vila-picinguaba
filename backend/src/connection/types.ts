export interface ConnectionProps {
  type: any
  host: string
  port: number
  username: string
  password: string
  database: string
  entities: any[]
  migrations: string[]
  cli: unknown
  synchronize: boolean
}
