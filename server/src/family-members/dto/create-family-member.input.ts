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

    @Field({ nullable: true, description: 'Url to imageUrl'})
    image?:string

    @Field({description: 'Date of birth'})
    dob: string

    @Field({description: 'Occupation'})
    occupation?: string

    @Field({ nullable: true, description: 'Country of FamilyMember'})
    country?:string
    
    @Field({ nullable: true, description: 'City of FamilyMember'})
    city?: string

    @Field(type => Int)
    userId?: number;
    
    @IsBoolean()
    @Field({ nullable: true })
    isSender?: boolean;
}