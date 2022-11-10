import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { Categorias } from './categorias.entity'
import { Imagens } from './imagens.entity'

@Entity('tb_produtos', { schema: 'picinguaba' })
export class Produtos {
  @PrimaryGeneratedColumn('uuid', { name: 'id_produto' })
  @ApiProperty({ description: 'column using uuid generator' })
  id_produto: string

  @Column('varchar', { length: 255, name: 'nome' })
  @ApiProperty()
  nome: string

  @Column('double')
  @ApiProperty()
  preco: number

  @Column({ select: false })
  @ApiProperty()
  id_categoria: string

  @Column({ default: () => "'0'" })
  @ApiProperty()
  disponivel: number

  @ManyToOne(() => Categorias, (tbCategorias) => tbCategorias.produtos, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_categoria', referencedColumnName: 'id_categoria' }])
  categoria: Categorias

  @OneToMany(() => Imagens, (tbImagens) => tbImagens.produto)
  imagens: Imagens[]
}
