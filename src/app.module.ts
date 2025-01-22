import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkersModule } from './workers/workers.module';
import { TypeOrmModule } from "@nestjs/typeorm"
import { WorkerData, WorkerList } from './workers/entities/worker.entity';
@Module({
  imports: [WorkersModule, TypeOrmModule.forRoot({
    type: "sqlite",
    database: "sql/db.sqlite",
    synchronize: true,
    entities: [WorkerList,WorkerData]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
