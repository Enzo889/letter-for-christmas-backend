import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CartModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
