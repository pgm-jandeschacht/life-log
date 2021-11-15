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
    ) {}
    // constructor(@InjectRepository(FamilyMember) private familyMemberRepository: Repository<FamilyMember>) {};
  getHello(): string {
    return 'Hello World!';
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
    // const familyRelations = [];

    // list of ALL family members
    const familyMembers = await this.familyMemberRepository.find();

    // list of ALL relation Types
    const relationTypes = await this.relationTypeRepository.find();

    for(let i = 0; i < familyMembers.length; i++) {
      const familyRelation = await this.familyRelationRepository.create({
        familyMember: familyMembers[i],
        relationType: relationTypes[faker.datatype.number({min: 0, max: relationTypes.length - 1})],
        relatedFamilyMember: familyMembers[faker.datatype.number({min: 0, max: familyMembers.length - 1})],
      })
    //   familyRelations.push(familyRelation);
        await this.familyRelationRepository.save(familyRelation);
    }

    // await this.relationTypeRepository.save(familyRelations);
    // return familyRelations;
  }

  async createWishListItems(amount: number): Promise<WishListItem[]> {
    let wishes = [];
    for (let i = 0; i < amount; i++) {
        const wish = await this.wishListItemRepository.create({
            content: faker.lorem.sentence(),
            completed: faker.datatype.boolean(),
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



  async addFamilyMemberToAgendaItem() {
    // All agendaItems
    const agendaItems = await this.agendaItemRepository.find();

    // All familyMembers
    const familyMembers = await this.familyMemberRepository.find();

    familyMembers.forEach(familyMember => {
       const inAgendaItems = faker.datatype.boolean();

       if(inAgendaItems) {
        const randomAmount = this.generateRandomArrayOfNumbers(agendaItems.length-1, 5);

        randomAmount.forEach(randomNumber => {
            familyMember.invitedAgendaItems.push(agendaItems[randomNumber]);
        })
        this.familyMemberRepository.save(familyMember);
    }
       
    })
}

generateRandomArrayOfNumbers(amount: number, max: number): number[] {
    let array = [];
    for(let i = 0; i < amount; i++) {
        const randomNumber = faker.datatype.number({min: 0, max: max});
        if(!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }
    return array;
}

// generateArrayOfRandomNumbers(limit: number, amount:number = 3, not: number) {
//     let array = [];

//     for(let i = 0; i < amount; i++) {
//         let random = faker.datatype.number({min: 0, max: limit});
//         if(!array.includes(random) && random !== not) {
//             array.push(random);
//         // } else {
//         // }
//     }
//     return array;


// }


//   async addFamilyMemberToAgendaItem() {

//     // list of ALL family members
//     const familyMembers = await this.familyMemberRepository.find();

//     // list of ALL Agenda Items
//     const agendaItems = await this.agendaItemRepository.find();

//     agendaItems.forEach(agendaItem => {
//         const withFamilyMember = faker.datatype.boolean();

//         if(withFamilyMember) {
//             const amountOfFamilyMembers = faker.datatype.number({min: 1, max: 3});

//             // let familyMembersForAgendaItem = [];
//             for(let i = 0; i < amountOfFamilyMembers; i++) {
//                 const familyMember = familyMembers[faker.datatype.number({min: 0, max: familyMembers.length - 1})];
//                 if(familyMember.id !== agendaItem.author.id) {
//                     agendaItem.with.push(familyMember);
//                     // familyMembersForAgendaItem.push(familyMember)
//                 }
//             }
//             this.agendaItemRepository.save(agendaItem);
//             console.log(agendaItem);
//         }
//     })
// }

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
        //   const albumItems = await this.createAlbumItems(5);
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

      this.createFamilyRelations();
    //   this.addFamilyMemberToAgendaItem();
    this.addFamilyMemberToAgendaItem();
    }


    // Clear all tables, cascade & restart count
    async emptyDatabase() {
        await this.userRepository.query(`TRUNCATE "user" RESTART IDENTITY CASCADE`);
        await this.familyMemberRepository.query(`TRUNCATE "family_member" RESTART IDENTITY CASCADE`);
        await this.wishListItemRepository.query(`TRUNCATE "wish_list_item" RESTART IDENTITY CASCADE`);
        await this.agendaItemRepository.query(`TRUNCATE "agenda_item" RESTART IDENTITY CASCADE`);
        await this.albumItemRepository.query(`TRUNCATE "album_item" RESTART IDENTITY CASCADE`);
        await this.noteRepository.query(`TRUNCATE "note" RESTART IDENTITY CASCADE`);
    }
}
