import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { threadId } from 'worker_threads';
import { CreateFamilyMemberInput } from './dto/create-family-member.input';
import { UpdateFamilyMemberInput } from './dto/update-family-member.input';
import { FamilyMember } from './entities/family-member.entity';

@Injectable()
export class FamilyMembersService {
    constructor(@InjectRepository(FamilyMember) private familyMemberRepository: Repository<FamilyMember>) {};

    create(createFamilyMemberInput: CreateFamilyMemberInput) : Promise<FamilyMember> {
        const newFamilyMember = this.familyMemberRepository.create(createFamilyMemberInput);

        return this.familyMemberRepository.save(newFamilyMember);
    }
    
    async findAll(): Promise<FamilyMember[]> {
        return this.familyMemberRepository.find();
    }
    // findAll(): Promise<FamilyMember[]> {
    //     return this.familyMemberRepository.find({
    //         relations: ['notes']
    //     });
    // }
    
    async findOneById(id: number): Promise<FamilyMember> {
        try {
            const familymember = await this.familyMemberRepository.findOneOrFail(id);
            return familymember;
        } catch(error) {
            // handle error
            throw error;
        }
    }


    async update(id: number, updateFamilyMemberInput: UpdateFamilyMemberInput){
        return this.familyMemberRepository.save({id: id, ...updateFamilyMemberInput});
    }
    
    async delete(id: number) : Promise<FamilyMember> {
        const familyMember = await this.findOneById(id);

        return this.familyMemberRepository.remove(familyMember);
    }



    // CUSTOM MET QUERY BUILDER
    // https://typeorm.io/#/select-query-builder


}
