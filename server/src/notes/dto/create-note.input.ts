import { 
  InputType, 
  Int, 
  Field 
} from '@nestjs/graphql';
import { 
  IsString, 
  IsDate 
} from 'class-validator';

@InputType()
export class CreateNoteInput {
  @IsString()
  @Field()
  content: string;

  @IsDate()
  @Field()
  date: Date;

  @Field(type => Int, { nullable: true })
  authorId?: number;

  @IsDate()
  @Field()
  created_at: Date;
  
  @IsDate()
  @Field()
  updated_at: Date;
}
