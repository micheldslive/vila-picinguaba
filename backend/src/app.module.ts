import 'reflect-metadata'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProdutosModule } from './modules/produtos.module'
import { CategoriasModule } from './modules/categorias.module'
import { ImagensModule } from './modules/imagens.module'
import { AppDataSource } from '../ormconfig'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options),
    ProdutosModule,
    CategoriasModule,
    ImagensModule,
  ],
})
export class AppModule {}
