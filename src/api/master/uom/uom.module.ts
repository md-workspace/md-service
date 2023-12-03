import {Module} from '@nestjs/common';
import {UomService} from './uom.service';
import {UomController} from './uom.controller';
import {PrismaService} from "../../../prisma.service";

@Module({
  controllers: [UomController],
  providers: [UomService, PrismaService],
})
export class UomModule {
}
