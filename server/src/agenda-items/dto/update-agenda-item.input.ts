import { CreateAgendaItemInput } from './create-agenda-item.input';
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
export class UpdateAgendaItemInput extends PartialType(CreateAgendaItemInput) {
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
    updated_at: Date;
}
