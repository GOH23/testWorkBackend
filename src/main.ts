import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*", // Allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  });
  app.setGlobalPrefix("/test")
  app.useGlobalPipes(new ValidationPipe());
  //Документация 
  const config = new DocumentBuilder()
    .setTitle("Документация для тестового задания")
    .setDescription("Api тестового задания")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(3002);
}
bootstrap();
