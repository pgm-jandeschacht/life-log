import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AgendaItem } from 'src/agenda-items/entities/agenda-item.entity';
import { AlbumItem } from 'src/album-items/entities/album-item.entity';
import { Note } from 'src/notes/entities/note.entity';
import { WishListItem } from 'src/wish-list-items/entities/wish-list-item.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

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

    // @Column()
    // @Field()
    // dob: Date;

    @Column({ nullable: true })
    @Field({ nullable: true,  defaultValue:true, description: 'Boolean representation if the family member is going to send information as well'})
    isSender?: boolean;

    
    @OneToOne(() => FamilyMember, familyMember => familyMember.father)
    // @OneToOne(() => FamilyMember, familyMember => familyMember.father, { eager: true})
    @Field(type => FamilyMember, { nullable: true, description: 'Father of this family member' })
    father?: FamilyMember;

    @OneToOne(() => FamilyMember, familyMember => familyMember.mother)
    // @OneToOne(() => FamilyMember, familyMember => familyMember.mother, { eager: true})
    @Field(type => FamilyMember, { nullable: true, description: 'Mother of this family member' })
    mother?: FamilyMember;
    
    @OneToOne(() => FamilyMember, familyMember => familyMember.partner)
    // @OneToOne(() => FamilyMember, familyMember => familyMember.partner, { eager: true})
    @Field(type => FamilyMember, { nullable: true, description: 'Partner of this family member' })
    partner?: FamilyMember;
    
    @OneToMany(() => FamilyMember, familyMember => familyMember.children)
    // @OneToMany(() => FamilyMember, familyMember => familyMember.children, { eager: true})
    @Field(type => [FamilyMember], { nullable: true, description: 'Father of this family member' })
    children?: FamilyMember[];

    // CHECK DOCUMENTATION FOR CASCADING...
    @OneToMany(() => Note, note => note.author, {eager: true})
    @Field(type => [Note], {nullable: true, description: 'List of notes made by the family member' })
    notes?: Note[];

    @OneToMany(() => AlbumItem, albumItem => albumItem.uploader, { eager: true })
    @Field(type => [AlbumItem], { nullable: true, description: 'List of album-items uploaded by this family member'})
    albumItems?: AlbumItem[];

    @ManyToMany(() => AlbumItem, albumItem => albumItem.inPicture, { eager: true })
    @JoinTable()
    inAlbumItems?: AlbumItem[];
    
    // CHECK DOCUMENTATION FOR CASCADING...
    @OneToMany(() => AgendaItem, agendaItem => agendaItem.author, {eager: true})
    @Field(type => [AgendaItem], {nullable: true, description: 'List of agenda items made by the family member' })
    agendaItems?: AgendaItem[]
    
    // CHECK DOCUMENTATION FOR CASCADING...
    
    @ManyToMany(() => AgendaItem, agendaItem => agendaItem.with,  {eager: true})
    @JoinTable()
    invitedAgendaItems?: AgendaItem[]

    // CHECK DOCUMENTATION FOR CASCADING...
    @OneToMany(() => WishListItem, wishListItem => wishListItem.author, {eager: true})
    @Field(type => [WishListItem], {nullable: true, description: 'List of agenda items made by the family member' })
    wishListItems?: WishListItem[]
    
    // CHECK DOCUMENTATION FOR CASCADING...
    
    @ManyToMany(() => WishListItem, wishListItem => wishListItem.for,  {eager: true})
    @JoinTable()
    inWishListItem?: WishListItem[]
    
    

    //invitedAgendaItems: AgendaItem[]
}