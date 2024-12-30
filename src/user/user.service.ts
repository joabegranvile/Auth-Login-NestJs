import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(params: { createUserDto: CreateUserDto }) {
    const { createUserDto } = params;

    const data: Prisma.UserCreateInput = {
      ...createUserDto,
    };
    const createUser = await this.prisma.user.create({ data });
    return createUser;
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
