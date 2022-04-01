import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
