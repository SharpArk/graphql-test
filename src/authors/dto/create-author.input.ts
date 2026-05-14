import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name!: string;
}
