import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ImagensController } from 'src/controllers/imagens.controller'

import { Imagens } from 'src/entities/imagens.entity'
import { ImagensService } from 'src/services/imagens.service'

@Module({
  imports: [TypeOrmModule.forFeature([Imagens])],
  providers: [ImagensService],
  controllers: [ImagensController],
})
export class ImagensModule {}
