import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AlbumItem } from 'src/album-items/entities/album-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { 
  Column,
  Entity, 
  ManyToOne, 
  PrimaryGeneratedColumn 
} from 'typeorm';


@Entity()
@ObjectType()
export class FamilyMemberInAlbumItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID' })
    id: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the album item' })
    albumItemId: number;

    @ManyToOne(() => FamilyMember, familyMember => familyMember.FamilyMemberInAlbumItem, { onDelete: 'CASCADE' })
    @Field(type => FamilyMember, { description: 'The family member' })
    familyMember: FamilyMember;

    @ManyToOne(() => AlbumItem, albumItem => albumItem.albumItemWithFamilyMemberIn, { onDelete: 'SET NULL' })
    @Field(type => AlbumItem, { description: 'The related agenda item' })
    albumItem: AlbumItem;
}
