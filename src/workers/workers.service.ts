import { Injectable } from '@nestjs/common';
import { CreateTreeViewDto, CreateWorkerDto } from './dto/create.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { WorkerData, WorkerList } from './entities/worker.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TreeRepository } from 'typeorm';

@Injectable()
export class WorkersService {

  constructor(@InjectRepository(WorkerList) private readonly workerList: TreeRepository<WorkerList>,
    @InjectRepository(WorkerData) private readonly workerData: Repository<WorkerData>) {
  }
  async create() {
    const a1 = new WorkerList()
    a1.workerListName = "Генеральный директор";
    a1.workers = []
    var data = await this.workerList.save(a1);
    const a2 = new WorkerList()
    a2.workerListName = "Экономический отдел";
    a2.workers = [];
    a2.parent = data;
    const a3 = new WorkerList()
    a3.workerListName = "Служба охраны труда";
    a3.workers = [];
    a3.parent = data;
    const a4 = new WorkerList()
    a4.workerListName = "Юридический отдет";
    a4.workers = [];
    a4.parent = data;
    this.workerList.save([a2,a3,a4]);
    return {status: "Успешно добавлен пример"}
  }
  async addTreeView(data: CreateTreeViewDto){
    return this.workerList.save({
      workerListName: data.workerListName,
      parent: await this.workerList.findOneBy({workerListName: data.parentViewName})
    })
  }
  async createWorker(data: CreateWorkerDto) {

    var list = await this.workerList.findOneBy({workerListName: data.treeName});
    console.log(list)
    return this.workerData.save({
      image: data.image,
      name: data.name,
      phone: data.phone,
      workerList: list
    })
  }
  findAll() {
    return this.workerList.findTrees({relations: ["workers"]});
  }
}
