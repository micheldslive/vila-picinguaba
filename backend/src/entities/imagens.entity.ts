import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { Produtos } from './produtos.entity'

@Entity()
export class Imagens {
  @PrimaryGeneratedColumn('uuid', { name: 'id_img' })
  @ApiProperty({ description: 'column using uuid generator' })
  id_img: string

  @Column()
  @ApiProperty()
  url: string

  @Column()
  @ApiProperty()
  url_thumb: string

  @Column({ select: false })
  @ApiProperty()
  id_produto: string

  @ManyToOne(() => Produtos, (tbProdutos) => tbProdutos.imagens, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_produto', referencedColumnName: 'id_produto' }])
  produto: Produtos
}
