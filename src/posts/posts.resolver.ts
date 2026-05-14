import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { AddAutorInput } from './dto/add-autor.input';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Query((returns) => Post)
  findOne(@Args('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput);
  }

  @Mutation((returns) => Post)
  addAuthorToPost(@Args('addAuthorInput') addAuthorInput: AddAutorInput) {
    return this.postsService.addAuthorToPost(addAuthorInput); 
  }
}
