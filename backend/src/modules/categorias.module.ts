import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoriasController } from 'src/controllers/categorias.controller'

import { Categorias } from 'src/entities/categorias.entity'
import { CategoriasService } from 'src/services/categorias.service'

@Module({
  imports: [TypeOrmModule.forFeature([Categorias])],
  providers: [CategoriasService],
  controllers: [CategoriasController],
})
export class CategoriasModule {}
