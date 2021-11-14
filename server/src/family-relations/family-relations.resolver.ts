import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyRelationsService } from './family-relations.service';
import { FamilyRelation } from './entities/family-relation.entity';
import { CreateFamilyRelationInput } from './dto/create-family-relation.input';
import { UpdateFamilyRelationInput } from './dto/update-family-relation.input';

@Resolver(() => FamilyRelation)
export class FamilyRelationsResolver {
  constructor(private readonly familyRelationsService: FamilyRelationsService) {}

  @Mutation(() => FamilyRelation)
  createFamilyRelation(@Args('createFamilyRelationInput') createFamilyRelationInput: CreateFamilyRelationInput) {
    return this.familyRelationsService.create(createFamilyRelationInput);
  }

  @Query(() => [FamilyRelation], { name: 'familyRelations' })
  familyRelations(): Promise<FamilyRelation[]> {
    return this.familyRelationsService.findAll();
  }

  @Query(() => FamilyRelation, { name: 'relationType' })
  FamilyRelationById(@Args('id', { type: () => Int }) id: number): Promise<FamilyRelation> {
        return this.familyRelationsService.findOneById(id);
  }

  @Mutation(() => FamilyRelation)
  updateRelationType(
      @Args('id', { type: () => Int }) 
      id: number,
      @Args('updateFamilyRelationInput') 
      updateFamilyRelationInput: UpdateFamilyRelationInput) {
    return this.familyRelationsService.update(id, updateFamilyRelationInput);
  }

  @Mutation(() => FamilyRelation)
  removeRelationType(@Args('id', { type: () => Int }) id: number):Promise<FamilyRelation> {
      const toBeDeletedFamilyRelation = this.familyRelationsService.findOneById(id);
      if(toBeDeletedFamilyRelation){
          return this.familyRelationsService.delete(id);
      } else {
          return null;
      }
  }
}