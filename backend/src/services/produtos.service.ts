import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Produtos } from 'src/entities/produtos.entity'

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,
  ) {}

  findAll(): Promise<Produtos[]> {
    return this.produtosRepository.find({
      relations: ['categoria', 'imagens'],
    })
  }

  findOne(id: string): Promise<Produtos> {
    return this.produtosRepository.findOne(id, {
      relations: ['categoria', 'imagens'],
    })
  }

  findAllByCat(id_categoria: string): Promise<Produtos[]> {
    return this.produtosRepository.find({
      relations: ['categoria', 'imagens'],
      where: { id_categoria },
    })
  }

  createProduto(produto: Produtos): Promise<Produtos> {
    return this.produtosRepository.save(produto)
  }

  updateProduto(id: string, produto: Produtos): Promise<any> {
    return this.produtosRepository.update(id, produto)
  }

  deleteOne(id: string) {
    return this.produtosRepository.delete(id)
  }
}
