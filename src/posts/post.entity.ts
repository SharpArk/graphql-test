import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from 'src/authors/entities/author.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  title!: string;

  @Field(() => String, { nullable: true })
  content!: string | null;

  @Field(() => Author, { nullable: true })
  author!: Author | null;
}
