import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prismaService: PrismaService) {}
  create(createCartDto: CreateCartDto) {
    return this.prismaService.cart.create({
      data: createCartDto,
    });
  }

  findAll() {
    return this.prismaService.cart.findMany();
  }

  async findOne(id: number) {
    const cartFound = await this.prismaService.cart.findUnique({
      where: {
        id: id,
      },
    });

    if (!cartFound) {
      throw new NotFoundException(`cart with id ${id} not found`);
    }

    return cartFound;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const updateCart = await this.prismaService.cart.update({
      where: {
        id: id,
      },
      data: updateCartDto,
    });

    if (!updateCart) {
      throw new NotFoundException(`cart with id ${id} not found`);
    }

    return updateCart;
  }

  async remove(id: number) {
    const deleteCart = await this.prismaService.cart.delete({
      where: {
        id: id,
      },
    });

    if (!deleteCart) {
      throw new NotFoundException(`cart with id ${id} not found`);
    }

    return deleteCart;
  }
}
