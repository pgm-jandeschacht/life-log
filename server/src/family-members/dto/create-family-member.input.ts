import { Field, InputType, Int } from "@nestjs/graphql";
import { Contains, IsAlpha, IsBoolean } from "class-validator";
import { User } from "src/users/entities/user.entity";

@InputType()
export class CreateFamilyMemberInput {

    @IsAlpha()
    @Field()
    firstname: string;
    
    @IsAlpha()
    @Field({ nullable: true })
    lastname?: string;
    
    @Contains('male' || 'female' || 'other')
    @Field()
    gender: string;
    
    @IsBoolean()
    @Field({ nullable: true })
    isAlive?: boolean;
    
    @Field({ nullable: true })
    bio?: string;

    // @Field(type => User, { nullable: true, description: 'The user that is linked to the family member'})
    // user?: User;

    @Field(type => Int)
    userId?: number;

    // user?: User;

    // @Field()
    // dob: Date;
    
    @IsBoolean()
    @Field({ nullable: true })
    isSender?: boolean;
}