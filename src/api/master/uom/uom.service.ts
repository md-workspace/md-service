import { Injectable } from '@nestjs/common';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import {PrismaService} from "../../../prisma.service";

@Injectable()
export class UomService {
  constructor(private readonly prisma: PrismaService) {
  }
  create(createUomDto: CreateUomDto) {
    return 'This action adds a new uom';
  }

  findAll() {
    return `This action returns all uom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uom`;
  }

  update(id: number, updateUomDto: UpdateUomDto) {
    return `This action updates a #${id} uom`;
  }

  remove(id: number) {
    return `This action removes a #${id} uom`;
  }
}
