import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateFamilyMemberInput } from './dto/create-family-member.input';
import { UpdateFamilyMemberInput } from './dto/update-family-member.input';
import { FamilyMember } from './entities/family-member.entity';

@Injectable()
export class FamilyMembersService {
  constructor(
    @InjectRepository(FamilyMember) 
    private familyMemberRepository: Repository<FamilyMember>,
    private userService: UsersService,
  ) {};

  create(createFamilyMemberInput: CreateFamilyMemberInput) : Promise<FamilyMember> {
    const newFamilyMember = this.familyMemberRepository.create(createFamilyMemberInput);
    return this.familyMemberRepository.save(newFamilyMember);
  }
  
  async findAll(): Promise<FamilyMember[]> {
      return this.familyMemberRepository.find();
  }
  
  async findOneById(id: number): Promise<FamilyMember> {
    try {
      const familymember = await this.familyMemberRepository.findOneOrFail(id);
        return familymember;
    } catch(error) {
        throw error;
    }
  }

  async findFamilyMemberByUserId(userId: number) : Promise<FamilyMember> {
    return this.familyMemberRepository.findOneOrFail({
      where: {
        userId: userId
      }
    })
  }

  async update(id: number, updateFamilyMemberInput: UpdateFamilyMemberInput){
      return this.familyMemberRepository.save({id: id, ...updateFamilyMemberInput});
  }
  
  async delete(id: number) : Promise<FamilyMember> {
      const familyMember = await this.findOneById(id);

      return this.familyMemberRepository.remove(familyMember);
  }

  getUser(userId: number) :Promise<User> {
      return this.userService.findUserById(userId);
  }
}
