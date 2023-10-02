import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

const port = process.env.PORT ? +process.env.PORT : 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  app.enableCors();
  await app.listen(3000);
}
bootstrap().then(() => console.log("App Started"));
