import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  @Field(() => String)
  title!: string;

  @MaxLength(400)
  @Field(() => String, { nullable: true })
  content!: string | null;
}
