import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Imagens } from 'src/entities/imagens.entity'

@Injectable()
export class ImagensService {
  constructor(
    @InjectRepository(Imagens)
    private imagensRepository: Repository<Imagens>,
  ) {}

  findAll(): Promise<Imagens[]> {
    return this.imagensRepository.find()
  }

  findOne(id: string): Promise<Imagens> {
    return this.imagensRepository.findOne(id)
  }

  createImagem(imagem: Imagens): Promise<Imagens> {
    return this.imagensRepository.save(imagem)
  }

  updateImagem(id: string, imagem: Imagens): Promise<any> {
    return this.imagensRepository.update(id, imagem)
  }

  deleteOne(id: string) {
    return this.imagensRepository.delete(id)
  }
}
