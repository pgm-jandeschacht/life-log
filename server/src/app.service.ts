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
import { LikedPicture } from './liked-pictures/entities/liked-picture.entity';
import { clearScreenDown } from 'readline';
import { HelpPage } from './help-pages/entities/help-page.entity';


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
    @InjectRepository(LikedPicture)
    private likedPictureRepository: Repository<LikedPicture>,
    @InjectRepository(HelpPage)
    private helpPageRepository: Repository<HelpPage>
  ) {}

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
      const amountOfRelations = faker.datatype.number({min:1, max:15});
      
      // create relations & not with itself
      const randomRelations = this.generateRandomArrayOfNumbers(amountOfRelations, familyMembers.length-1, familyMember.id);
      console.log('random relations......', randomRelations);
      
      randomRelations.forEach(relation => {
        const familyRelation = this.familyRelationRepository.create({
          familyMember: familyMember,
          relationType: relationTypes[faker.datatype.number({min: 0, max: relationTypes.length -1})],
          relatedFamilyMember: familyMembers[relation],
          hidePictures: faker.datatype.boolean(),
        });
        this.familyRelationRepository.save(familyRelation);
      });
    })
  }
    
  async createWishListItems(amount: number): Promise<WishListItem[]> {
    let wishes = [];
    for (let i = 0; i < amount; i++) {
      const date = faker.date.past();
      const wish = await this.wishListItemRepository.create({
        content: faker.commerce.productName(),
        completed: faker.datatype.boolean(),
        created_at: date,
        updated_at: date,
        dueDate: faker.date.future(),
      })
      wishes.push(wish);
    }
    return wishes;
  }

  async createAgendaItems(amount: number): Promise<AgendaItem[]> {
    let agendaItems = [];
    for(let i= 0; i < amount; i++) {
      const date = faker.date.past();
      const agendaItem = await this.agendaItemRepository.create({
        content: faker.lorem.sentence(),
        created_at: date,
        updated_at: date,
        date: faker.date.between(new Date(2021, 9, 1), new Date(2021, 12, 29)),
      })
      agendaItems.push(agendaItem);
    }
    return agendaItems;
  }

  async createAlbumItems(amount: number): Promise<AlbumItem[]> {
    let albumItems = [];
    for(let i= 0; i < amount; i++) {
      const date = faker.date.past();
      const albumItem = await this.albumItemRepository.create({
        location: faker.address.city(),
        description: faker.lorem.sentence(),
        image: `${faker.image.people()}?random=${Math.round(Math.random() * 1000)}`,
        created_at: date,
        updated_at: date,
        date: faker.date.between(new Date(2021, 9, 1), new Date(2021, 12, 29)),
      })
      albumItems.push(albumItem);
    }
    return albumItems;
  }

  async createNotes(amount: number): Promise<Note[]> {
    let notes = [];
    for(let i= 0; i < amount; i++) {
      const date = faker.date.past();
      const note = await this.noteRepository.create({
        content: faker.lorem.sentence(),
        created_at: date,
        updated_at: date,
        date: faker.date.between(new Date(2021, 9, 1), new Date(2021, 12, 29)),
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
      // fakercloud is down
      // image: faker.image.avatar(),
      image: this.createRandomAvatar(),
      dob: faker.date.between('1920-01-01', '2021-12-31'),
      occupation: faker.name.jobTitle(),
      country: faker.address.country(),
      city: faker.address.city(),
    });
    return familyMember;
  }

  // fallback for fakercloud
  // source: https://avatar-endpoint.herokuapp.com/
  createRandomAvatar(): string {
    const faceTypes = ['angrywithfang', 'awe', 'blank', 'calm', 'cheeky', 'concerned', 'concernedfear', 'contempt', 'cute', 'cyclops', 'driven', 'eatinghappy', 'explaining', 'eyesclosed', 'fear', 'hectic', 'lovinggrin1', 'lovinggrin2', 'monster', 'old', 'rage', 'serious', 'smile', 'smilebig', 'smilelol', 'smileteethgap', 'solemn', 'suspicious', 'tired', 'veryangry'];
    const headTypes = ['afro', 'bangs', 'bangs2', 'bantuknots', 'bun', 'cornrows', 'cornrows2', 'graybun', 'graymedium', 'long', 'longbangs', 'longcurly', 'medium1', 'medium2', 'medium3', 'mediumbangs2', 'mediumbangs3', 'flattop', 'flattoplong', 'grayshort', 'mohawk', 'nohair2', 'nohair3', 'pomp', 'shaved2', 'shaved3', 'short1', 'short2', 'short4', 'short5', 'buns', 'hat-beanie', 'hat-hip', 'longafro', 'mediumbangs', 'mediumstraight', 'mohawk2', 'nohair1', 'shaved1', 'short3', 'twists', 'twists2', 'bear', 'hijab', 'turban'];

    const baseUrl = 'https://avatar-endpoint.herokuapp.com/api/';

    const url = `${baseUrl}?size=512&head_type=${headTypes[Math.floor(Math.random() * headTypes.length)]}&head_color=${this.createRandomHexadecimalForAvatar()}&face_type=${faceTypes[Math.floor(Math.random() * faceTypes.length)]}&bg_color=${this.createRandomHexadecimalForAvatar()}`;

    return url;
  }

  createRandomHexadecimalForAvatar(): string {
    const hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '%23';
    for (let i = 0; i < 6; i++) {
      color += hexadecimal[Math.floor(Math.random() * hexadecimal.length)];
    }
    return color;
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
      const amountOfFamilyMembers = faker.datatype.number({min:0, max:10});
      if(amountOfFamilyMembers > 0) {
        const randomFamilyMembers = this.generateRandomArrayOfNumbers(amountOfFamilyMembers, familyMembers.length-1, agendaItem.authorId);
      
        randomFamilyMembers.forEach(familyMember => {
          const familyAgendaItem = this.familyMemberInAgendaItemRepository.create({
            agendaItem: agendaItem,
            familyMemberId: familyMember,
          });
          this.familyMemberInAgendaItemRepository.save(familyAgendaItem);     
        });
      }
    });
  }

  // Many to Many Album Items
  async addFamilyMembersToAlbumItem() {
    // All agendaItems
    const albumItems = await this.albumItemRepository.find();

    // All familyMembers
    const familyMembers = await this.familyMemberRepository.find();

    albumItems.forEach(albumItem => {
      const amountOfFamilyMembers = faker.datatype.number({min:0, max:10});
      if(amountOfFamilyMembers > 0) {
        const randomFamilyMembers = this.generateRandomArrayOfNumbers(amountOfFamilyMembers, familyMembers.length-1, albumItem.uploaderId);
          
        randomFamilyMembers.forEach(familyMember => {
          const familyAlbumItem = this.familyMemberInAlbumItemRepository.create({
            albumItem: albumItem,
            familyMemberId: familyMember,
          });
          this.familyMemberInAlbumItemRepository.save(familyAlbumItem);     
        });
      }
    });
  }

  // Many to Many Agenda Items
  async addFamilyMembersToWishListItem() {
    // All agendaItems
    const wishListItems = await this.wishListItemRepository.find();

    // All familyMembers
    const familyMembers = await this.familyMemberRepository.find();

    wishListItems.forEach(wishListItem => {
      const amountOfFamilyMembers = faker.datatype.number({min:0, max:5});
      if(amountOfFamilyMembers > 0) {
        const randomFamilyMembers = this.generateRandomArrayOfNumbers(amountOfFamilyMembers, familyMembers.length-1, wishListItem.authorId);
          
        randomFamilyMembers.forEach(familyMember => {
          const familyWishListItem = this.familyMemberInWishListItemRepository.create({
            wishListItem: wishListItem,
            familyMemberId: familyMember,
          });
          this.familyMemberInWishListItemRepository.save(familyWishListItem);     
        });
      }
    });
  }

  // Liked pictures
  async addLikedPictures() {
    // All albumItems
    const albumItems = await this.albumItemRepository.find();

    // All familyMembers
    const familyMembers = await this.familyMemberRepository.find();

    albumItems.forEach(albumItem => {
      const amountOfFamilyMembers = faker.datatype.number({min:0, max:10});
      if(amountOfFamilyMembers > 0) {
        const randomFamilyMembers = this.generateRandomArrayOfNumbers(amountOfFamilyMembers, familyMembers.length-1, albumItem.uploaderId);
          
        randomFamilyMembers.forEach(familyMember => {
          const likedPicture = this.likedPictureRepository.create({
            albumItemId: albumItem.id,
            familyMemberId: familyMember,
          });
          this.likedPictureRepository.save(likedPicture);     
        });
      }
    });
  }

  generateRandomArrayOfNumbers(amount: number, max: number, not:number = -1): number[] {
    let array = [];
    for(let i = 0; i < amount; i++) {
      let randomNumber = faker.datatype.number({min: 0, max: max});
      while(array.includes(randomNumber) && randomNumber === not) {
        randomNumber = faker.datatype.number({min: 0, max: max});
      }
      array.push(randomNumber);
    }
    return array;
  }

  async seedDatabase(amount: number = 5) {
    this.createRelationTypes();
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
        await this.familyMemberRepository.save(familyMember);
      } else {
          await this.userRepository.save(user);
      }
    }
    
    this.createFamilyRelations();
    this.addFamilyMembersToAgendaItem();
    this.addFamilyMembersToAlbumItem();
    this.addFamilyMembersToWishListItem();
    this.addLikedPictures();
    this.addHelpPages();
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
    
    await this.familyMemberInWishListItemRepository.query(`TRUNCATE "family_member_in_wish_list_item" RESTART IDENTITY CASCADE`);
    await this.familyMemberInAgendaItemRepository.query(`TRUNCATE "family_member_in_agenda_item" RESTART IDENTITY CASCADE`);
    await this.familyMemberInAlbumItemRepository.query(`TRUNCATE "family_member_in_album_item" RESTART IDENTITY CASCADE`);
    await this.helpPageRepository.query(`TRUNCATE "help_page" RESTART IDENTITY CASCADE`);
  }

  addHelpPages() {
    const helpPages = 
    [
      {
          step: 1,
          page: "My pictures",
          img: "pictures1.png",
          title: "To view photos in Recent pictures",
          text: "Select My pictures > Recent pictures."
      },
      {
          step: 2,
          page: "My pictures",
          img: "pictures2.png",
          title: "To view photos in Pictures I liked",
          text: "Select My pictures > Pictures I liked."
      },
      {
          step: 3,
          page: "My pictures",
          img: "pictures3.png",
          title: "To view photos of a specific family member",
          text: "Select the desired family member’s name under I want to see pictures from."
      },
      {
          step: 1,
          page: "Pictures detail",
          img: "picturesDetail1.png",
          title: "To see the details of a picture of a specific family member",
          text: "Select My pictures > Pictures I liked, then select a photo."
      },
      {
          step: 2,
          page: "Pictures detail",
          img: "picturesDetail2.png",
          title: "To like a photo, select My pictures",
          text: "Pictures I liked and select a photo. Select the heart icon."
      },
      {
          step: 3,
          page: "Pictures detail",
          img: "picturesDetail3.png",
          title: "To view the details of people in the picture",
          text: "Select My pictures > Pictures I liked and select a photo. Under People in the picture, select a family member."
      },
      {
          step: 4,
          page: "Pictures detail",
          img: "picturesDetail4.png",
          title: "To see more photos of the people in the picture",
          text: "Select My pictures > Pictures I liked, then select a photo. Under More pictures of, select a family member’s name."
      },
      {
          step: 1,
          page: "My agenda",
          img: "agenda1.png",
          title: "To add an agenda item",
          text: "Select the plus icon."
      },
      {
          step: 2,
          page: "My agenda",
          img: "agenda2.png",
          title: "Filling out the form",
          text: "Enter an agenda event in the Today I box."
      },
      {
          step: 3,
          page: "My agenda",
          img: "agenda3.png",
          title: "Selecting the people who accompanied me",
          text: "Select the family member from the drop down menu in the This was with field."
      },
      {
          step: 4,
          page: "My agenda",
          img: "agenda4.png",
          title: "Adding the agenda item",
          text: "Select the Add to agenda button."
      },
      {
          step: 1,
          page: "My family",
          img: "family1.png",
          title: "To view an individual family member’s profile",
          text: "Select the family member from the list."
      },
      {
          step: 2,
          page: "My family",
          img: "family2.png",
          title: "To view a family member’s photos",
          text: "Select Pictures from [family member’s name]."
      },
      {
          step: 3,
          page: "My family",
          img: "family3.png",
          title: "To link a family member to a wish",
          text: "Select Ask [family member’s name] to bring something. You can also link a family member to a wish from the My wishlist page."
      },
      {
          step: 1,
          page: "My wishlist",
          img: "wishlist1.png",
          title: "To add a wish",
          text: "Select the plus icon."
      },
      {
          step: 2,
          page: "My wishlist",
          img: "wishlist2.png",
          title: "Filling out the form",
          text: "Select a name from the dropdown menu under Who do you want to bring it?"
      },
      {
          step: 3,
          page: "My wishlist",
          img: "wishlist3.png",
          title: "Filling out the form",
          text: "Enter the desired items in the What do they need to bring? box."
      },
      {
          step: 4,
          page: "My wishlist",
          img: "wishlist4.png",
          title: "Filling out the form",
          text: "Select a date from the dropdown menu under When do they have to bring it?"
      },
      {
          step: 5,
          page: "My wishlist",
          img: "wishlist5.png",
          title: "Adding the wishlist item",
          text: "Select Add to wishlist."
      },
      {
          step: 6,
          page: "My wishlist",
          img: "wishlist6.png",
          title: "To edit an item in your wishlist",
          text: "Select an item."
      },
      {
          step: 7,
          page: "My wishlist",
          img: "wishlist7.png",
          title: "Select Edit Wish",
          text: "Change any details in your wish, and select Save changes."
      },
      {
          step: 8,
          page: "My wishlist",
          img: "wishlist8.png",
          title: "To delete a wish",
          text: "Select the desired wish, then select Delete wish."
      }
    ];

    helpPages.forEach(helpPage => {
      const newHelpPage =  this.helpPageRepository.create({
        page: helpPage.page,
        step: helpPage.step,
        image: helpPage.img,
        title: helpPage.title,
        text: helpPage.text
      });
      this.helpPageRepository.save(newHelpPage);
    });

  }
}