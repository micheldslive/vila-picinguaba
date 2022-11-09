import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProdutosController } from 'src/controllers/produtos.controller'

import { Produtos } from 'src/entities/produtos.entity'
import { ProdutosService } from 'src/services/produtos.service'

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
