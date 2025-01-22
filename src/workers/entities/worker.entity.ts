import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";
@Entity()
@Tree("nested-set")
export class WorkerList {
    @PrimaryGeneratedColumn("uuid")
    workerListId: string
    @Column()
    workerListName: string
    @TreeChildren()
    children: WorkerList[]
    @TreeParent()
    parent: WorkerList
    @OneToMany(()=>WorkerData,res=>res.workerList,{})
    workers: WorkerData[]
}
@Entity()
export class WorkerData {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column()
    image: string
    @Column()
    name: string
    @Column()
    phone: string
    @ManyToOne(()=>WorkerList,res=>res.workers)
    workerList: WorkerList
}
