import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { AddAutorInput } from './dto/add-autor.input';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({
      where: {
        id,
      },
      include: { author: true },
    });
  }

  async createPost(post: CreatePostInput) {
    const data = await this.prisma.post.create({
      data: post,
      include: {
        author: true,
      },
    });
    return data;
  }

  async addAuthorToPost(addAuthorInput: AddAutorInput) {
    const addAuthor = await this.prisma.post.update({
      where: {
        id: addAuthorInput.idPost,
      },
      data: {
        authorId: addAuthorInput.idAutor,
      },
      include: {
        author: true,
      },
    });
    return addAuthor;
  }
}
