import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FamilyMemberInAlbumItem } from 'src/family-member-in-album-items/entities/family-member-in-album-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

    // Many to Many
    @OneToMany(() => FamilyMemberInAlbumItem, FamilyMemberInAlbumItem => FamilyMemberInAlbumItem.albumItem, { eager: true, cascade: true})
    @Field(type => [FamilyMemberInAlbumItem], { nullable: true, description: 'List of albumItels where a family member is in'})
    albumItemWithFamilyMemberIn: FamilyMemberInAlbumItem[];

}
