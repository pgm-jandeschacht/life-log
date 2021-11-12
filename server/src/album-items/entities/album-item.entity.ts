import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class AlbumItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field({nullable: true, description: 'Location where this picture is taken'})
    location?: string;

    @Field({nullable: true, description: 'What is there to say about this picture'})
    description?: string;

    //date

    // @Column()
    // @Field(type => Int, { nullable: true })
    // uploaderId?: number;

    @ManyToOne(() => FamilyMember, uploader => uploader.albumItems, { onDelete: 'SET NULL' })
    @Field(type => FamilyMember, { description: 'Uploader of this picture' })
    uploader: FamilyMember;

    @ManyToMany(() => FamilyMember, FamilyMember => FamilyMember.inAlbumItems, { onDelete: 'SET NULL' })
    @Field(type => FamilyMember, { nullable: true, description: 'List of family members in this picture' })
    inPicture?: FamilyMember[];
}
