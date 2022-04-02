import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`BackEnd is running on: http://localhost:PORT/todos`);
  console.log(`FrontEnd is running on: http://localhost:PORT/home`);
}
bootstrap();
