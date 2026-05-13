import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';

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
}
