import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AgendaItem } from 'src/agenda-items/entities/agenda-item.entity';
import { AlbumItem } from 'src/album-items/entities/album-item.entity';
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





    
    // @Column()
    // @Field(type => Int, {nullable: true})
    // userId?: number;

    @OneToOne(type => User, user => user.familyMember, { cascade: true, eager: true })
    @JoinColumn()
    @Field(type => User, { nullable: true, description: 'The user that is linked to the family member'})
    user?: User;

    @Column({ nullable: true })
    @Field({ nullable: true,  defaultValue:true, description: 'Boolean representation if the family member is going to send information as well'})
    isSender?: boolean;

    // CHECK DOCUMENTATION FOR CASCADING...
    @OneToMany(() => Note, note => note.author, {eager: true, cascade: true})
    @Field(type => [Note], {nullable: true, description: 'List of notes made by the family member' })
    notes?: Note[];

    @OneToMany(() => AlbumItem, albumItem => albumItem.uploader, { eager: true, cascade: true})
    @Field(type => [AlbumItem], { nullable: true, description: 'List of album-items uploaded by this family member'})
    albumItems?: AlbumItem[];

    @OneToMany(() => FamilyRelation, familyRelation => familyRelation.familyMember, { eager: true, cascade: true})
    @Field(type => [FamilyRelation], { nullable: true, description: 'List of family relations this family member is involved in'})
    familyRelationsTo: FamilyRelation[];

    @OneToMany(() => FamilyRelation, familyRelation => familyRelation.relatedFamilyMember, { eager: true, cascade: true})
    @Field(type => [FamilyRelation], { nullable: true, description: 'List of family relations this family member is involved in (other side)'})
    familyRelationsFrom: FamilyRelation[];

    @ManyToMany(() => AlbumItem, albumItem => albumItem.inPicture, { eager: true, cascade: true })
    @JoinTable()
    inAlbumItems?: AlbumItem[];
    
    // CHECK DOCUMENTATION FOR CASCADING...
    @OneToMany(() => AgendaItem, agendaItem => agendaItem.author, {eager: true, cascade: true})
    @Field(type => [AgendaItem], {nullable: true, description: 'List of agenda items made by the family member' })
    agendaItems?: AgendaItem[]
    
    // CHECK DOCUMENTATION FOR CASCADING...
    
    @ManyToMany(() => AgendaItem, agendaItem => agendaItem.with,  {eager: true, cascade: true})
    @JoinTable()
    invitedAgendaItems?: AgendaItem[]

    // CHECK DOCUMENTATION FOR CASCADING...
    @OneToMany(() => WishListItem, wishListItem => wishListItem.author, {eager: true, cascade: true})
    @Field(type => [WishListItem], {nullable: true, description: 'List of agenda items made by the family member' })
    wishListItems?: WishListItem[]
    
    // CHECK DOCUMENTATION FOR CASCADING...
    
    @ManyToMany(() => WishListItem, wishListItem => wishListItem.inWishListItem,  {eager: true, cascade: true})
    @JoinTable()
    inWishListItem?: WishListItem[]
    
    

    //invitedAgendaItems: AgendaItem[]
}