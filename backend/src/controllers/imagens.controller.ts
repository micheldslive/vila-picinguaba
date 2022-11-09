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
import { Imagens } from 'src/entities/imagens.entity'
import { ImagensService } from 'src/services/imagens.service'
import { ImagensBody } from 'src/swagger/body.extends'

@Controller('imagens')
@ApiTags('Imagens')
export class ImagensController {
  constructor(private readonly libraryService: ImagensService) {}

  @Post()
  @ApiBody({ type: ImagensBody })
  @ApiOperation({ summary: 'Cria um novo registro de imagem' })
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async createImagem(@Res() response, @Body() imagem: Imagens) {
    try {
      const imagens = await this.libraryService.createImagem(imagem)
      return response.status(HttpStatus.CREATED).json(imagens)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Put(':id')
  @ApiBody({ type: ImagensBody })
  @ApiOperation({ summary: 'Atualiza uma imagem pelo {ìd}' })
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async updateImagem(
    @Res() response,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() imagem: Imagens,
  ) {
    try {
      const updateOne = await this.libraryService.updateImagem(id, imagem)
      const updateResponse = updateOne.affected
        ? { message: 'Imagem atualizado com sucesso' }
        : { message: 'Imagem não encontrado' }
      return response.status(HttpStatus.OK).json(updateResponse)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todas as imagens' })
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async fetchAll(@Res() response) {
    try {
      const imagens = await this.libraryService.findAll()
      return response.status(HttpStatus.OK).json(imagens)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retorna uma imagem pelo {ìd}' })
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async findById(
    @Res() response,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    try {
      const imagens = await this.libraryService.findOne(id)
      const imagem = imagens || { message: 'Imagem não encontrada' }
      return response.status(HttpStatus.OK).json(imagem)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deleta uma imagem pelo {ìd}' })
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async deleteById(
    @Res() response,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    try {
      const deleteOne = await this.libraryService.deleteOne(id)
      const imagem = deleteOne.affected
        ? { message: 'Imagem deletada com sucesso' }
        : { message: 'Imagem não encontrada' }
      return response.status(HttpStatus.OK).json(imagem)
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      })
    }
  }
}
