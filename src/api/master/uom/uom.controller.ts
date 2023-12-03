import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {UomService} from './uom.service';
import {CreateUomDto} from './dto/create-uom.dto';
import {UpdateUomDto} from './dto/update-uom.dto';

@Controller('v1/uom')
export class UomController {
  constructor(private readonly uomService: UomService) {
  }

  @Post()
  create(@Body() createUomDto: CreateUomDto) {
    return this.uomService.create(createUomDto);
  }

  @Get()
  findAll() {
    return this.uomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUomDto: UpdateUomDto) {
    return this.uomService.update(+id, updateUomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uomService.remove(+id);
  }
}
