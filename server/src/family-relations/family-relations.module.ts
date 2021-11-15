import { Module } from '@nestjs/common';
import { FamilyRelationsService } from './family-relations.service';
import { FamilyRelationsResolver } from './family-relations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyRelation } from './entities/family-relation.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([FamilyRelation])
    ],
  providers: [FamilyRelationsResolver, FamilyRelationsService]
})
export class FamilyRelationsModule {}
