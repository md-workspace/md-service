import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UomModule} from './api/master/uom/uom.module';
import { ProductModule } from './api/master/product/product.module';

@Module({
  imports: [UomModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
