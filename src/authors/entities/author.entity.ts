import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';

@ObjectType()
export class Author {
  @Field((type) => Int)
  id!: number;

  @Field((type) => String)
  name!: string;

  @Field((type) => [Post], { nullable: true })
  posts!: Post[] | null;
}
