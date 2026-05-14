import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  title!: string;

  @Field(() => String, { nullable: true })
  content!: string | null;

  @Field(() => Int, { nullable: true })
  authorId!: number | null;
}
