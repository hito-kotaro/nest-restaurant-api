import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/menu');
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true }));
  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
