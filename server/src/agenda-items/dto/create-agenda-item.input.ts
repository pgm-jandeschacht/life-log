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
export class CreateAgendaItemInput {
  @IsString()
  @Field({description: 'Content of the agenda-item'})
  content: string;

  @Field(type => Int)
  authorId?: number;
  
  @IsDate()
  @Field()
  date?:Date;

  @IsDate()
  @Field()
  created_at: Date;
  
  @IsDate()
  @Field()
  updated_at: Date;
}
