import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID of the user' })
    id: number;

    @Column()
    @Field({ description: 'The username of the user' })
    username: string;

    @Column()
    @Field({description: 'The email of the user'})
    email:string;

    // Change PASSWORD to encode, ...
    @Column()
    @Field({ description: 'The password of the user'})
    password: string;

    
    @OneToOne(type => FamilyMember, familyMember => familyMember.user )
    // @JoinColumn()
    @Field(type => FamilyMember, { nullable: true })
    familyMember?: FamilyMember;


}
