import { OmitType, PartialType, ApiExcludeController } from '@nestjs/swagger'
import { Categorias } from 'src/entities/categorias.entity'
import { Imagens } from 'src/entities/imagens.entity'
import { Produtos } from 'src/entities/produtos.entity'

@ApiExcludeController()
export class ProdutosBody extends PartialType(
  OmitType(Produtos, ['id_produto']),
) {}

export class CategoriasBody extends PartialType(
  OmitType(Categorias, ['id_categoria']),
) {}

export class ImagensBody extends PartialType(OmitType(Imagens, ['id_img'])) {}
