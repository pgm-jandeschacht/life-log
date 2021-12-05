import { Module } from '@nestjs/common';
import { FamilyRelationsService } from './family-relations.service';
import { FamilyRelationsResolver } from './family-relations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyRelation } from './entities/family-relation.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { RelationTypesModule } from 'src/relation-types/relation-types.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FamilyRelation]),
    FamilyMembersModule,
    RelationTypesModule
  ],
  providers: [
    FamilyRelationsResolver, 
    FamilyRelationsService
  ],
  exports: [
    FamilyRelationsService
  ]
})
export class FamilyRelationsModule {}
