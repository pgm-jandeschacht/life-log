import { CreateAlbumItemInput } from './create-album-item.input';
import { 
  InputType, 
  Field, 
  Int, 
  PartialType 
} from '@nestjs/graphql';
import { 
  IsDate, 
  IsString 
} from 'class-validator';

@InputType()
export class UpdateAlbumItemInput extends PartialType(CreateAlbumItemInput) {
  @IsString()
  @Field({nullable: true, description: 'Location where this picture is taken'})
  location?: string;

  @IsString()
  @Field({nullable: true, description: 'What is there to say about this picture'})
  description?: string;

  @IsString()
  @Field({nullable: true, description: 'Url of image'})
  image?: string;

  @IsDate()
  @Field()
  date: Date;

  @Field(type => Int, { nullable: true })
  uploaderId?: number;
  
  @IsDate()
  @Field()
  updated_at: Date;
}
