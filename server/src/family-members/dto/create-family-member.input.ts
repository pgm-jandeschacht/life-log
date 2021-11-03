import { Field, InputType, Int } from "@nestjs/graphql";
import { Contains, IsAlpha, IsBoolean } from "class-validator";

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

    // @Field()
    // dob: Date;
    
    @IsBoolean()
    @Field({ nullable: true })
    isSender?: boolean;
}