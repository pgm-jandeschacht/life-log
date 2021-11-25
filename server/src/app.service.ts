import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendaItem } from './agenda-items/entities/agenda-item.entity';
import { AlbumItem } from './album-items/entities/album-item.entity';
import { FamilyMember } from './family-members/entities/family-member.entity';
import { Note } from './notes/entities/note.entity';
import { User } from './users/entities/user.entity';
import { WishListItem } from './wish-list-items/entities/wish-list-item.entity';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { RelationType } from './relation-types/entities/relation-type.entity';
import { FamilyRelation } from './family-relations/entities/family-relation.entity';
import { FamilyMemberInAgendaItem } from './family-member-in-agenda-items/entities/family-member-in-agenda-item.entity';
import { FamilyMemberInAlbumItem } from './family-member-in-album-items/entities/family-member-in-album-item.entity';
import { FamilyMemberInWishListItem } from './family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';


@Injectable()
export class AppService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(FamilyMember)
        private familyMemberRepository: Repository<FamilyMember>,
        @InjectRepository(WishListItem)
        private wishListItemRepository: Repository<WishListItem>,
        @InjectRepository(AgendaItem)
        private agendaItemRepository: Repository<AgendaItem>,
        @InjectRepository(AlbumItem)
        private albumItemRepository: Repository<AlbumItem>,
        @InjectRepository(Note)
        private noteRepository: Repository<Note>,
        @InjectRepository(RelationType)
        private relationTypeRepository: Repository<RelationType>,
        @InjectRepository(FamilyRelation)
        private familyRelationRepository: Repository<FamilyRelation>,
        @InjectRepository(FamilyMemberInAgendaItem)
        private familyMemberInAgendaItemRepository: Repository<FamilyMemberInAgendaItem>,
        @InjectRepository(FamilyMemberInAlbumItem)
        private familyMemberInAlbumItemRepository: Repository<FamilyMemberInAlbumItem>,
        @InjectRepository(FamilyMemberInWishListItem)
        private familyMemberInWishListItemRepository: Repository<FamilyMemberInWishListItem>,
    ) {}
    // constructor(@InjectRepository(FamilyMember) private familyMemberRepository: Repository<FamilyMember>) {};
  getHello(): void {
    // return 'Hello World!';

  }

  createRelationTypes() {
    const relationTypes = [
        "grandparent",
        "grandfather",
        "grandmother",
        "mother",
        "father",
        "aunt",
        "uncle",
        "child",
        "daughter",
        "son",
        "sister",
        "brother",
        "niece",
        "nephew",
        "cousin",
        "grandson",
        "granddaughter",
        "grandchild",
        "partner"
    ];   

    relationTypes.forEach(relation => {
        const relationType = this.relationTypeRepository.create({
            name: relation,
        })
        //relationTypesForDb.push(relationType);
        this.relationTypeRepository.save(relationType);
    });
      
  }


  async createFamilyRelations() {
    // list of ALL family members
    const familyMembers = await this.familyMemberRepository.find();

    // list of ALL relation Types
    const relationTypes = await this.relationTypeRepository.find();

    familyMembers.forEach(familyMember => {
        // max amount of relations for each family member
        const amountOfRelations = faker.datatype.number({min:1, max:10});
        
        const randomRelations = this.generateRandomArrayOfNumbers(amountOfRelations, familyMembers.length-1, familyMember.id);
        
        randomRelations.forEach(relation => {
            const familyRelation = this.familyRelationRepository.create({
                familyMember: familyMember,
                relationType: relationTypes[faker.datatype.number({min: 0, max: relationTypes.length -1})],
                relatedFamilyMember: familyMembers[relation],
                hidePictures: false
            });
            this.familyRelationRepository.save(familyRelation);
        });
    })
}
    

  async createWishListItems(amount: number): Promise<WishListItem[]> {
    let wishes = [];
    for (let i = 0; i < amount; i++) {
        const wish = await this.wishListItemRepository.create({
            content: faker.lorem.sentence(),
            completed: faker.datatype.boolean(),
            createdOn: faker.date.past(),
            dueDate: faker.date.between(new Date(), new Date(2021, 12, 29)),
        })
        wishes.push(wish);
    }
    return wishes;
  }

  async createAgendaItems(amount: number): Promise<AgendaItem[]> {
      let agendaItems = [];
      for(let i= 0; i < amount; i++) {
        const agendaItem = await this.agendaItemRepository.create({
            title: faker.lorem.sentence(),
            createdOn: faker.date.past(),
            date: faker.date.between(new Date(2021, 9, 1), new Date(2021, 12, 29)),
        })
        agendaItems.push(agendaItem);
    }
    return agendaItems;
  }

  async createAlbumItems(amount: number): Promise<AlbumItem[]> {
      let albumItems = [];
      for(let i= 0; i < amount; i++) {
        const albumItem = await this.albumItemRepository.create({
            location: faker.address.city(),
        })
        albumItems.push(albumItem);
      }
      return albumItems;
  }

  async createNotes(amount: number): Promise<Note[]> {
      let notes = [];
      for(let i= 0; i < amount; i++) {
        const note = await this.noteRepository.create({
            content: faker.lorem.sentence()
        })
        notes.push(note);
      }
      return notes;
  }
  
  async createFamilyMember(): Promise<FamilyMember> {
      const familyMember = await this.familyMemberRepository.create({
          firstname : faker.name.firstName(),
          lastname : faker.name.lastName(),
          gender : faker.name.gender(),
          isSender: true,
          isAlive : true,
          bio : faker.lorem.sentences(),
          image: faker.image.avatar(),
          dob: faker.date.past(),
          occupation: faker.name.jobTitle(),
          country: faker.address.country(),
          city: faker.address.city(),
        });
        return familyMember;
  }
  hashPassword(password: string): string {
    // const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, 10);
  }


  // BCRYPT.COMPARE
  async createUser(): Promise<User> {
      const salt = bcrypt.genSaltSync(10);
    const user = await this.userRepository.create({
      username : faker.internet.userName(),
      email : faker.internet.email(),
      //TODO enable later
    //   password: this.hashPassword(faker.internet.password()),
      password : faker.internet.password(),
    });
    return user;
  }

  // Many to Many Agenda Items
  async addFamilyMembersToAgendaItem() {
    // All agendaItems
    const agendaItems = await this.agendaItemRepository.find();

    // All familyMembers
    const familyMembers = await this.familyMemberRepository.find();


    agendaItems.forEach(agendaItem => {
        const amountOfFamilyMembers = faker.datatype.number({min:1, max:5});
        const randomFamilyMembers = this.generateRandomArrayOfNumbers(amountOfFamilyMembers, familyMembers.length-1, agendaItem.id);
        
        randomFamilyMembers.forEach(familyMember => {
            const familyAgendaItem = this.familyMemberInAgendaItemRepository.create({
                agendaItem: agendaItem,
                familyMember: familyMembers[familyMember],
            });
            this.familyMemberInAgendaItemRepository.save(familyAgendaItem);     
        });

    });
    }

  // Many to Many Album Items
  async addFamilyMembersToAlbumItem() {
    // All agendaItems
    const albumItems = await this.albumItemRepository.find();

    // All familyMembers
    const familyMembers = await this.familyMemberRepository.find();


    albumItems.forEach(albumItem => {
        const amountOfFamilyMembers = faker.datatype.number({min:1, max:5});
        const randomFamilyMembers = this.generateRandomArrayOfNumbers(amountOfFamilyMembers, familyMembers.length-1, albumItem.id);
        
        randomFamilyMembers.forEach(familyMember => {
            const familyAlbumItem = this.familyMemberInAlbumItemRepository.create({
                albumItem: albumItem,
                familyMember: familyMembers[familyMember],
            });
            this.familyMemberInAlbumItemRepository.save(familyAlbumItem);     
        });

    });
    }

  // Many to Many Agenda Items
  async addFamilyMembersToWishListItem() {
    // All agendaItems
    const wishListItems = await this.wishListItemRepository.find();

    // All familyMembers
    const familyMembers = await this.familyMemberRepository.find();


    wishListItems.forEach(wishListItem => {
        const amountOfFamilyMembers = faker.datatype.number({min:1, max:5});
        const randomFamilyMembers = this.generateRandomArrayOfNumbers(amountOfFamilyMembers, familyMembers.length-1, wishListItem.id);
        
        randomFamilyMembers.forEach(familyMember => {
            const familyWishListItem = this.familyMemberInWishListItemRepository.create({
                wishListItem: wishListItem,
                familyMember: familyMembers[familyMember],
            });
            this.familyMemberInWishListItemRepository.save(familyWishListItem);     
        });

    });
    }



generateRandomArrayOfNumbers(amount: number, max: number, not:number = -1): number[] {
    let array = [];
    for(let i = 0; i < amount; i++) {
        const randomNumber = faker.datatype.number({min: 0, max: max});
        if(!array.includes(randomNumber) && randomNumber !== not) {
            array.push(randomNumber);
        }
    }
    return array;
}

  // save somewhere else, put SALT ROUNDS in .env

  async seedDatabase(amount: number = 5) {

    this.createRelationTypes();
    //   const amountOfUsers = 3;
    console.log(amount);

      let users=[];

      for(let i=0; i<amount; i++) {
        const user = await this.createUser();

        const alsoFamilyMember = faker.datatype.boolean();

        if(true) {
          const familyMember = await this.createFamilyMember();

          familyMember.wishListItems = await this.createWishListItems(5);
          familyMember.agendaItems = await this.createAgendaItems(5);
          familyMember.albumItems = await this.createAlbumItems(5);
          const albumItems = await this.createAlbumItems(5);
          familyMember.notes = await this.createNotes(5);
          familyMember.user = user;

          // Many to Many Relations
        //   familyMember.inAlbumItems = 
          
        //   console.log(familyMember);
          await this.familyMemberRepository.save(familyMember);
        } else {
            await this.userRepository.save(user);
        }

      }

    //   this.addFamilyMemberToAgendaItem();
    //   this.addFamilyMemberToWishListItem();
      this.createFamilyRelations();

      this.addFamilyMembersToAgendaItem();
      this.addFamilyMembersToAlbumItem();
      this.addFamilyMembersToWishListItem();
    }


    // Clear all tables, cascade & restart count
    async emptyDatabase() {
        await this.userRepository.query(`TRUNCATE "user" RESTART IDENTITY CASCADE`);
        await this.familyMemberRepository.query(`TRUNCATE "family_member" RESTART IDENTITY CASCADE`);
        await this.wishListItemRepository.query(`TRUNCATE "wish_list_item" RESTART IDENTITY CASCADE`);
        await this.agendaItemRepository.query(`TRUNCATE "agenda_item" RESTART IDENTITY CASCADE`);
        await this.albumItemRepository.query(`TRUNCATE "album_item" RESTART IDENTITY CASCADE`);
        await this.noteRepository.query(`TRUNCATE "note" RESTART IDENTITY CASCADE`);
        await this.relationTypeRepository.query(`TRUNCATE "relation_type" RESTART IDENTITY CASCADE`);
    }
}
