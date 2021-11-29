import { CreateNoteInput } from './create-note.input';
import { 
  InputType, 
  Field, 
  Int, 
  PartialType 
} from '@nestjs/graphql';
import { 
  IsString, 
  IsDate 
} from 'class-validator';

@InputType()
export class UpdateNoteInput extends PartialType(CreateNoteInput) {
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
  updated_at: Date;
}
