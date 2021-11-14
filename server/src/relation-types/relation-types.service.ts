import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RelationType } from './entities/relation-type.entity';
import { CreateRelationTypeInput } from './dto/create-relation-type.input';
import { UpdateRelationTypeInput } from './dto/update-relation-type.input';

@Injectable()
export class RelationTypesService {

    constructor(
        @InjectRepository(RelationType)
        private relationTypeRepository: Repository<RelationType>
    ) {};

    async create(createRelationTypeInput: CreateRelationTypeInput) : Promise<RelationType> {
        const newRelationType = this.relationTypeRepository.create(createRelationTypeInput);

        return this.relationTypeRepository.save(newRelationType);
    }

    async findAll(): Promise<RelationType[]> {
        return this.relationTypeRepository.find();
    }

    async findOneById(id: number): Promise<RelationType> {
        try {
            const relationType = this.relationTypeRepository.findOneOrFail(id);
            return relationType;
        } catch(error) {
            throw error;
        }
    }

    async update(id: number, updateRelationTypeInput: UpdateRelationTypeInput) {
        return this.relationTypeRepository.save({id: id, ...updateRelationTypeInput});
    }

    async delete(id: number): Promise<RelationType> {
        const relationType = await this.findOneById(id);

        return this.relationTypeRepository.remove(relationType);
    }
}
