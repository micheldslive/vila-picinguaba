import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Delete,
  Res,
  ParseUUIDPipe,
} from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Produtos } from 'src/entities/produtos.entity'
import { ProdutosService } from 'src/services/produtos.service'
import { ProdutosBody } from 'src/swagger/body.extends'

@Controller('produtos')
@ApiTags('Produtos')
export class ProdutosController {
  constructor(private readonly libraryService: ProdutosService) {}

  @Post()
  @ApiBody({ type: ProdutosBody })
  @ApiOperation({ summary: 'Cria um novo registro de produto' })
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async createProduto(@Res() response, @Body() produto: Produtos) {
    try {
      const produtos = await this.libraryService.createProduto(produto)
      return response.status(HttpStatus.CREATED).json(produtos)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Put(':id')
  @ApiBody({ type: ProdutosBody })
  @ApiOperation({ summary: 'Atualiza um produto pelo {ìd}' })
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async updateProduto(
    @Res() response,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() produto: Produtos,
  ) {
    try {
      const updateOne = await this.libraryService.updateProduto(id, produto)
      const updateResponse = updateOne.affected
        ? { message: 'Produto atualizado com sucesso' }
        : { message: 'Produto não encontrado' }
      return response.status(HttpStatus.OK).json(updateResponse)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retorna Todos os Produtos' })
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async fetchAll(@Res() response) {
    try {
      const produtos = await this.libraryService.findAll()
      return response.status(HttpStatus.OK).json(produtos)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retorna um produto pelo {ìd}' })
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async findById(
    @Res() response,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    try {
      const produtos = await this.libraryService.findOne(id)
      const produto = produtos || { message: 'Produto não encontrado' }
      return response.status(HttpStatus.OK).json(produto)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Get('categoria/:id')
  @ApiOperation({ summary: 'Retorna um produto pelo {ìd}' })
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async findByIdCat(
    @Res() response,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    try {
      const produtos = await this.libraryService.findAllByCat(id)
      const produto = produtos || { message: 'Produto não encontrado' }
      return response.status(HttpStatus.OK).json(produto)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deleta um produto pelo {ìd}' })
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async deleteById(
    @Res() response,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    try {
      const deleteOne = await this.libraryService.deleteOne(id)
      const produto = deleteOne.affected
        ? { message: 'Produto deletado com sucesso' }
        : { message: 'Produto não encontrado' }
      return response.status(HttpStatus.OK).json(produto)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }
}
