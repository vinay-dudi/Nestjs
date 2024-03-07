import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NinjasService } from './ninjas/ninjas.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, NinjasService],
})
export class AppModule {}
