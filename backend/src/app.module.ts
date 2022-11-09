import 'reflect-metadata'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProdutosModule } from './modules/produtos.module'
import { CategoriasModule } from './modules/categorias.module'
import { ImagensModule } from './modules/imagens.module'
import { connection } from './connection'

@Module({
  imports: [
    TypeOrmModule.forRoot(connection),
    ProdutosModule,
    CategoriasModule,
    ImagensModule,
  ],
})
export class AppModule {}
