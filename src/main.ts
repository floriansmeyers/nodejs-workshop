import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

const config = new DocumentBuilder()
.setTitle("Todo Example")
.setDescription("Example API documentation")
.setVersion('0.1')
.addTag('todos')
.build()

const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT || 3001);
}
bootstrap();
