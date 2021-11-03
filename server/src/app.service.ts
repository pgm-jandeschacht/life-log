import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FamilyMember } from './family-members/entities/family-member.entity';

@Injectable()
export class AppService {
    // constructor(@InjectRepository(FamilyMember) private familyMemberRepository: Repository<FamilyMember>) {};
  getHello(): string {
    return 'Hello World!';
  }

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
