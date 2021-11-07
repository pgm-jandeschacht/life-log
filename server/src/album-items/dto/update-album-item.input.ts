import { CreateAlbumItemInput } from './create-album-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAlbumItemInput extends PartialType(CreateAlbumItemInput) {
    @Field({nullable: true, description: 'Location where this picture is taken'})
    location?: string;

    @Field({nullable: true, description: 'What is there to say about this picture'})
    description?: string;

    //date

    // @Field(type => Int, { nullable: true })
    // uploaderId?: number;
}
