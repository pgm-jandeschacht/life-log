import { 
  InputType, 
  Int, 
  Field 
} from '@nestjs/graphql';
import { 
  IsDate, 
  IsString 
} from 'class-validator';

@InputType()
export class CreateAlbumItemInput {
  @IsString()
  @Field({nullable: true, description: 'Location where this picture is taken'})
  location?: string;

  @IsString()
  @Field({nullable: true, description: 'What is there to say about this picture'})
  description?: string;

  @IsDate()
  @Field()
  date: Date;

  @Field(type => Int, { nullable: true })
  uploaderId?: number;

  @IsDate()
  @Field()
  created_at: Date;
  
  @IsDate()
  @Field()
  updated_at: Date;
}
