import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerData, WorkerList } from './entities/worker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    WorkerList,WorkerData
  ])],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
