import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNoteInput {
    @Field()
    content: string;

    @Field(type => Int)
    authorId: number;

}
