import { 
  ObjectType, 
  Field, 
  Int 
} from '@nestjs/graphql';
import { FamilyMemberInAlbumItem } from 'src/family-member-in-album-items/entities/family-member-in-album-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { 
  Column, 
  CreateDateColumn, 
  Entity,
  ManyToOne, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity()
@ObjectType()
export class AlbumItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID of the album-item' })
    id: number;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

    @Column()
    @Field({nullable: true, description: 'Location where this picture is taken'})
    location?: string;

    @Column()
    @Field({nullable: true, description: 'What is there to say about this picture'})
    description?: string;

    @Column({ type: 'timestamp', nullable: true })
    @Field()
    date: Date;

    @Column()
    @Field(type => Int, { nullable: true })
    uploaderId?: number;

    @ManyToOne(() => FamilyMember, uploader => uploader.albumItems, { onDelete: 'SET NULL' })
    @Field(type => FamilyMember, { description: 'Uploader of this picture' })
    uploader: FamilyMember;

    // Many to Many, linked family members
    @OneToMany(() => FamilyMemberInAlbumItem, FamilyMemberInAlbumItem => FamilyMemberInAlbumItem.albumItem, { cascade: true})
    @Field(type => [FamilyMemberInAlbumItem], { nullable: true, description: 'List of albumItels where a family member is in'})
    albumItemWithFamilyMemberIn: FamilyMemberInAlbumItem[];

}
