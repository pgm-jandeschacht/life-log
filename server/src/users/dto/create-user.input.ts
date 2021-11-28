import { 
  InputType, 
  Field 
} from '@nestjs/graphql';
import { 
  IsAlpha, 
  IsEmail 
} from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsAlpha()
    @Field()
    username: string;
    
    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;
}
