import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendaItem } from './agenda-items/entities/agenda-item.entity';
import { AlbumItem } from './album-items/entities/album-item.entity';
import { FamilyMember } from './family-members/entities/family-member.entity';
import { Note } from './notes/entities/note.entity';
import { User } from './users/entities/user.entity';
import { WishListItem } from './wish-list-items/entities/wish-list-item.entity';


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
        private noteRepository: Repository<Note>
    ) {}
    // constructor(@InjectRepository(FamilyMember) private familyMemberRepository: Repository<FamilyMember>) {};
  getHello(): string {
    return 'Hello World!';
  }

  async seedDatabase() {
    const faker = require('faker');
      const amountOfUsers = 3;
      for (let i = 0; i < amountOfUsers; i++) {
          const alsoFamilyMember = faker.datatype.boolean();

          const newUser = await this.userRepository.create({
            username : faker.internet.userName(),
            email : faker.internet.email(),
            password : faker.internet.password(),
          });

          // create familyMember
          if(alsoFamilyMember) {
              console.log('OOK FAMILY');
              const newFamilyMember = await this.familyMemberRepository.create({

              firstname : faker.name.firstName(),
              lastname : faker.name.lastName(),
              gender : faker.name.gender(),
              isAlive : true,
              bio : faker.lorem.sentences(),
              });
              newUser.familyMember = await newFamilyMember;
            //   newFamilyMember.user = newUser
            //   console.log(newFamilyMember);
            this.familyMemberRepository.save(await newFamilyMember);
          } else {
            //   this.userRepository.save(newUser);
          }
        }
}
//   async seedDatabase() {
//       const amountOfUsers = 10;
//       for (let i = 0; i < amountOfUsers; i++) {
//           const alsoFamilyMember = faker.datatype.boolean();

//           const user = new User();
//           console.log(user);
//           user.username = faker.name.internet.userName();
//           user.email = faker.name.internet.email();
//           user.password = faker.internet.password();

//           // create familyMember
//           if(alsoFamilyMember) {
//               const familyMember = new FamilyMember();
//               familyMember.firstname = faker.name.firstName();
//               familyMember.lastname = faker.name.lastName();
//               // familyMember.dob = faker.date.past();
//               // familyMember.dob = faker.date.past(50);
//               familyMember.gender = faker.name.gender();
//               familyMember.isAlive = true;
//               familyMember.bio = faker.lorem.sentences();
//             user.familyMember = familyMember;
//           }
//           this.userRepository.create(user);
//         }
// }

// seedFamilyMembers() {
//     const minato = this.familyMemberRepository.create({
//         firstname: 'Minato',
//         lastname: 'Namikaze',
//         gender: 'male',
//     });

//     const kushina = this.familyMemberRepository.create({
//         firstname: 'Kushina',
//         lastname: 'Uzumaki',
//         gender: 'female',
//     })

//     minato.partner = kushina;
//     kushina.partner = minato;
    
//     const naruto = this.familyMemberRepository.create({
//         firstname: 'Naruto',
//         lastname: 'Uzumaki',
//         gender: 'male',
//     })

//     naruto.father = minato;
//     naruto.mother = kushina;
//     minato.children = [naruto];
//     kushina.children = [naruto];

//     const hinata = this.familyMemberRepository.create({
//         firstname: 'Hinata',
//         lastname: 'Hyuga',
//         gender: 'female',
//     });

//     const boruto = this.familyMemberRepository.create({
//         firstname: 'Boruto',
//         lastname: 'Uzumaki',
//         gender: 'male',
//     });

//     const hinawari = this.familyMemberRepository.create({
//         firstname: 'Hinawari',
//         lastname: 'Uzumaki',
//         gender: 'female',
//     })

//     naruto.children = [boruto, hinawari];
//     hinata.children = [boruto, hinawari];
//     naruto.partner = hinata;
//     hinata.partner = naruto;


//     this.familyMemberRepository.save(naruto);
    
//   }
}
