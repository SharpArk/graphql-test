import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAuthorInput: CreateAuthorInput) {
    const author = await this.prismaService.author.create({
      data: createAuthorInput,
      include: {
        posts: true,
      },
    });
    return author;
  }

  async findAll() {
    const authors = await this.prismaService.author.findMany({
      include: {
        posts: true,
      },
    });
    return authors;
  }

  async findOne(id: number) {
    const author = await this.prismaService.author.findUnique({
      where: {
        id,
      },
    });
    return author;
  }

  async update(updateAuthorInput: UpdateAuthorInput) {
    const newAuthor = await this.prismaService.author.update({
      data: {
        name: updateAuthorInput.name,
      },
      where: {
        id: updateAuthorInput.id,
      },
    });
    return newAuthor;
  }

  async remove(id: number) {
    const authorDelete = await this.prismaService.author.delete({
      where: { id: id },
    });
    return authorDelete;
  }
}
