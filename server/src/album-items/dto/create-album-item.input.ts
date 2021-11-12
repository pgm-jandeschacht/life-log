import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlbumItemInput {
    @Field({nullable: true, description: 'Location where this picture is taken'})
    location?: string;

    @Field({nullable: true, description: 'What is there to say about this picture'})
    description?: string;

    //date

    // @Field(type => Int)
    // uploaderId: number;

}
