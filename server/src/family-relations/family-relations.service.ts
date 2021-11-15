import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { RelationType} from 'src/relation-types/entities/relation-type.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { RelationTypesService } from 'src/relation-types/relation-types.service';
import { Repository } from 'typeorm';
import { CreateFamilyRelationInput } from './dto/create-family-relation.input';
import { UpdateFamilyRelationInput } from './dto/update-family-relation.input';
import { FamilyRelation } from './entities/family-relation.entity';

@Injectable()
export class FamilyRelationsService {
    constructor(
        @InjectRepository(FamilyRelation)
        private familyRelationRepository: Repository<FamilyRelation>,
        private familyMemberService: FamilyMembersService,
        private relationTypesService: RelationTypesService,
    ) {}

    create(createFamilyRelationInput: CreateFamilyRelationInput): Promise<FamilyRelation> {
        const newFamilyRelation = this.familyRelationRepository.create(createFamilyRelationInput);

        return this.familyRelationRepository.save(newFamilyRelation);
    }

    findAll(): Promise<FamilyRelation[]> {
        return this.familyRelationRepository.find();
    }

    findByFamilyMemberId(id: number): Promise<FamilyRelation[]> {
        return this.familyRelationRepository.find({where: { familyMemberId: id}});
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

    getFamilyMember(familyMemberId: number): Promise<FamilyMember> {
        return this.familyMemberService.findOneById(familyMemberId);
    }

    getRelatedFamilyMember(relatedFamilyMemberId: number): Promise<FamilyMember> {
        return this.familyMemberService.findOneById(relatedFamilyMemberId);
    }

    getRelationType(relationTypeId: number): Promise<RelationType> {
        return this.relationTypesService.findOneById(relationTypeId);
    }

    
}