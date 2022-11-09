import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  const port: any = process.env.PORT || 4000

  const APP_NAME = process.env.npm_package_name || 'api-picinguaba'
  const APP_VERSION = process.env.npm_package_version || '1.0'

  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(
      `Bem vindo(a) a ${APP_NAME}, API do teste prático do Gama Xp 39. Para consultar mais informações, acesse nossa documentação abaixo.`,
    )
    .setVersion(APP_VERSION)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/', app, document)

  await app.listen(port)
}

bootstrap()
