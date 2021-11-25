import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AgendaItem } from 'src/agenda-items/entities/agenda-item.entity';
import { AlbumItem } from 'src/album-items/entities/album-item.entity';
import { FamilyMemberInAgendaItem } from 'src/family-member-in-agenda-items/entities/family-member-in-agenda-item.entity';
import { FamilyMemberInAlbumItem } from 'src/family-member-in-album-items/entities/family-member-in-album-item.entity';
import { FamilyMemberInWishListItem } from 'src/family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';
import { FamilyRelation } from 'src/family-relations/entities/family-relation.entity';
import { Note } from 'src/notes/entities/note.entity';
import { User } from 'src/users/entities/user.entity';
import { WishListItem } from 'src/wish-list-items/entities/wish-list-item.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

@Entity()
@ObjectType()
export class FamilyMember {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID of the family member' })
    id: number;

    @Column()
    @Field({ description: 'The firstname of the family member' })
    firstname: string;

    @Column()
    @Field({ nullable: true, description: 'The lastname of the family member'})
    lastname?: string;

    @Column()
    @Field({ description: 'The gender of the family member' })
    gender: string;

    @Column({ nullable: true })
    @Field({ nullable: true, defaultValue: true, description: 'Boolean representation if the family member is alive'})
    isAlive?: boolean;

    @Column()
    @Field({ nullable: true, description: 'A small bio about the family member'})
    bio?: string;
    
    @Column()
    @Field({ nullable: true, description: 'Url to imageUrl'})
    image?:string

    @Column({ type: 'timestamp', nullable: true })
    @Field()
    dob: Date;

    @Column()
    @Field({ nullable: true, description: 'Name of occupation'})
    occupation?: string;

    @Column()
    @Field({ nullable: true, description: 'Country of FamilyMember'})
    country?:string
    
    @Column()
    @Field({ nullable: true, description: 'City of FamilyMember'})
    city?: string

    @Column({ nullable: true })
    @Field({ nullable: true,  defaultValue:true, description: 'Boolean representation if the family member is going to send information as well'})
    isSender?: boolean;
    
    
    
    // Relations
    @OneToOne(type => User, user => user.familyMember, { cascade: true, eager: true })
    @JoinColumn()
    @Field(type => User, { nullable: true, description: 'The user that is linked to the family member'})
    user?: User;

    // CHECK DOCUMENTATION FOR CASCADING...
    @OneToMany(() => Note, note => note.author, {eager: true, cascade: true})
    @Field(type => [Note], {nullable: true, description: 'List of notes made by the family member' })
    notes?: Note[];

    @OneToMany(() => AlbumItem, albumItem => albumItem.uploader, { eager: true, cascade: true})
    @Field(type => [AlbumItem], { nullable: true, description: 'List of album-items uploaded by this family member'})
    albumItems?: AlbumItem[];

    @OneToMany(() => AgendaItem, agendaItem => agendaItem.author, {eager: true, cascade: true})
    @Field(type => [AgendaItem], {nullable: true, description: 'List of agenda items made by the family member' })
    agendaItems?: AgendaItem[]

    @OneToMany(() => WishListItem, wishListItem => wishListItem.author, {eager: true, cascade: true})
    @Field(type => [WishListItem], {nullable: true, description: 'List of agenda items made by the family member' })
    wishListItems?: WishListItem[]

    
    // Many to Many
    // Family Relations
    @OneToMany(() => FamilyRelation, familyRelation => familyRelation.familyMember, { eager: true, cascade: true})
    @Field(type => [FamilyRelation], { nullable: true, description: 'List of family relations this family member is involved in'})
    familyRelationsTo: FamilyRelation[];

    @OneToMany(() => FamilyRelation, familyRelation => familyRelation.relatedFamilyMember, { eager: true, cascade: true})
    @Field(type => [FamilyRelation], { nullable: true, description: 'List of family relations this family member is involved in (other side)'})
    familyRelationsFrom: FamilyRelation[];

    // In Wishlist Items
    @OneToMany(() => FamilyMemberInWishListItem, FamilyMemberInWishListItem => FamilyMemberInWishListItem.familyMember, { eager: true, cascade: true})
    @Field(type => [FamilyMemberInWishListItem], { nullable: true, description: 'List of family members in wishlistitems this family member is involved in'})
    FamilyMemberInWishListItems: FamilyMemberInWishListItem[];
    
    // In Agenda Items
    @OneToMany(() => FamilyMemberInAgendaItem, FamilyMemberInAgendaItem => FamilyMemberInAgendaItem.familyMember, { eager: true, cascade: true})
    @Field(type => [FamilyMemberInAgendaItem], { nullable: true, description: 'List of family members in agendaitems this family member is involved in'})
    FamilyMemberInAgendaItem: FamilyMemberInAgendaItem[];
    
    // In Album Items
    @OneToMany(() => FamilyMemberInAlbumItem, FamilyMemberInAlbumItem => FamilyMemberInAlbumItem.familyMember, { eager: true, cascade: true})
    @Field(type => [FamilyMemberInAlbumItem], { nullable: true, description: 'List of family members in albumitems this family member is involved in'})
    FamilyMemberInAlbumItem: FamilyMemberInAlbumItem[];
}