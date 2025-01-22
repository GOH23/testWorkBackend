import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkerDto } from './create.dto';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {

}
