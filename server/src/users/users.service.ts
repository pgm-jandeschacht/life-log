import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
const faker = require('faker');

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private userRepository: Repository<User>,

    ) {}
  
    create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserInput);

    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findUserById(id: number): Promise<User> {
      try {
          const user = await this.userRepository.findOneOrFail(id);
          return user;
      } catch(error) {
          throw error;
      }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
        const user = await this.userRepository.findOneOrFail({ where: { email: email } });
        return user;
    } catch(error) {
        throw error;
    }
}

  async findOneByUsername(username: string): Promise<User> | undefined {
      try {
        //   const user = await this.userRepository.findOneOrFail(username);
          const user = await this.userRepository.findOneOrFail({ where: { username: username } });
          return user;
      } catch(error) {
          console.log('ERROR', error);
          throw error;
      }
  }

//   async findFamilyMemberByUserId(userId: number): Promise<FamilyMember> | undefined {
//       try {
//           const familyMember = await this.userRepository.findOneOrFail({ where: { userId: userId } });
//           return familyMember;
//       } catch(error) {
//           throw error;
//       }
//   }

  update(id: number, updateUserInput: UpdateUserInput) : Promise<User> {
      return this.userRepository.save({ id: id, ... updateUserInput });
  }

  async remove(id: number): Promise<User> {
    const user = await this.findUserById(id);

    return this.userRepository.remove(user);
  }

  test(name: string): string {
      console.log(name);
      return name;
  }

  async seedUsers(amount: number) : Promise<User[]> {
      let users = [];
        for (let i = 0; i < amount; i++) {
            users.push(await this.create({
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }));
        }
        console.log(users);
        return users;

  }
}
