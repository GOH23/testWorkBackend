import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator'

export class CreateWorkerDto {
    @ApiProperty({
        title: "ФИО сотрудника",
        example: "Иванов Иван Иванович"
    })
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    @ApiProperty({
        title: "Номер телефона сотрудника",
        example: "8999999999"
    })
    phone: string
    @ApiProperty({
        title: "Ссылка на изображение",
        example: "https://sun1-28.userapi.com/s/v1/if1/DhY3sLsqwyoXlJ2bCUA-WyCdCVzKOhs4LPZ5t88UsbdhSDNqQi84023jmuj722qW94Z7wpHT.jpg"
    })
    @IsNotEmpty()
    @IsUrl()
    image: string
    @ApiProperty({ example: "Экономический отдет", title: "Название отдела для добавления работника" })
    @IsNotEmpty()
    treeName: string
}
export class CreateTreeViewDto {
    @IsNotEmpty()
    @ApiProperty({
        title: "Название отдела или цеха",
        example: ""
    })
    workerListName: string
    @IsOptional()
    @ApiProperty({
        title: "Название главного отдела или цеха",
        example: ""
    })
    parentViewName?: string
}


