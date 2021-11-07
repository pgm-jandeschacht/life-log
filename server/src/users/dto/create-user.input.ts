import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail } from 'class-validator';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';

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
    
    // familyMember?: FamilyMember;
}
