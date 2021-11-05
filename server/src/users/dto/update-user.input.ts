import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsAlpha, IsEmail } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    @IsAlpha()
    @Field()
    username: string;
    
    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;
}
