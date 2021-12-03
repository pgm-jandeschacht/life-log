import { 
  ObjectType, 
  Field, 
  Int 
} from '@nestjs/graphql';
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
export class LikedPicture {
  @PrimaryGeneratedColumn()
  @Field(type => Int, { description: 'The ID of the liked picture' })
  id: number;

  @Column()
  @Field(type => Int, { description: 'The ID of the family member who liked the picture' })
  familyMemberId: number;

  @Column()
  @Field(type => Int, { description: 'The ID of the picture that was liked' })
  albumItemId: number;

  @ManyToOne(() => FamilyMember, familyMember => familyMember.likedPictures, { onDelete: 'CASCADE' })
  @Field(type => FamilyMember, { description: 'The family member who liked the picture' })
  familyMember: FamilyMember;

  @ManyToOne(() => AlbumItem, albumItem => albumItem.likedPictures, { onDelete: 'CASCADE' })
  @Field(type => AlbumItem, { description: 'The picture that was liked' })
  albumItem: AlbumItem;
}
