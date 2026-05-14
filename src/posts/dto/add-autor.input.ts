import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class AddAutorInput {
  @Field(() => Int)
  idAutor!: number;

  @Field(() => Int)
  idPost!: number;
}