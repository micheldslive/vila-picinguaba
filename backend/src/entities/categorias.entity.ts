import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { Produtos } from './produtos.entity'

@Entity('tb_categorias')
export class Categorias {
  @PrimaryGeneratedColumn('uuid', { name: 'id_categoria' })
  @ApiProperty({ description: 'column using uuid generator' })
  id_categoria: string

  @Column()
  @ApiProperty()
  categoria: string

  @JoinColumn({
    name: 'id_categoria',
  })
  @OneToMany(() => Produtos, (tbProdutos) => tbProdutos.categoria)
  produtos: Produtos[]
}
