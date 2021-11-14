import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFamilyRelationInput } from './dto/create-family-relation.input';
import { UpdateFamilyRelationInput } from './dto/update-family-relation.input';
import { FamilyRelation } from './entities/family-relation.entity';

@Injectable()
export class FamilyRelationsService {
    constructor(
        @InjectRepository(FamilyRelation)
        private familyRelationRepository: Repository<FamilyRelation>
    ) {}

    create(createFamilyRelationInput: CreateFamilyRelationInput): Promise<FamilyRelation> {
        const newFamilyRelation = this.familyRelationRepository.create(createFamilyRelationInput);

        return this.familyRelationRepository.save(newFamilyRelation);
    }

    findAll(): Promise<FamilyRelation[]> {
        return this.familyRelationRepository.find();
    }

    findOneById(id: number): Promise<FamilyRelation> {
        return this.familyRelationRepository.findOneOrFail(id);
    }
    
    async update(id: number, updateFamilyRelationInput: UpdateFamilyRelationInput): Promise<FamilyRelation> {
        return this.familyRelationRepository.save({id: id, ...updateFamilyRelationInput});
    }

    async delete(id: number): Promise<FamilyRelation> {
        const familyRelation = await this.findOneById(id);

        return this.familyRelationRepository.remove(familyRelation);
    }

    
}