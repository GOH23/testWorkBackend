import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { CreateTreeViewDto, CreateWorkerDto } from './dto/create.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags("Работники предприятия")
@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) { }
  // @Get("template")
  // setWorkerList() {
  //   return this.workersService.create();
  // }
  @Post("worker")
  @ApiBody({
    description: "Данные для добавления работника",
    type: CreateWorkerDto
  })
  addWorker(@Body() data: CreateWorkerDto){
    return this.workersService.createWorker(data)
  }
  @Post()
  @ApiBody({
    description: "Данные для добавления отдела",
    type: CreateTreeViewDto
  })
  addTreeView(@Body() data: CreateTreeViewDto){
    return this.workersService.addTreeView(data);
  }
  @Get()
  getWorkerList() {
    return this.workersService.findAll();
  }

}
