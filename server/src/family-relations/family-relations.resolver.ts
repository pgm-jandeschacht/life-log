import { 
  Resolver, 
  Query, 
  Mutation, 
  Args, 
  Int, 
  ResolveField, 
  Parent 
} from '@nestjs/graphql';
import { FamilyRelationsService } from './family-relations.service';
import { FamilyRelation } from './entities/family-relation.entity';
import { CreateFamilyRelationInput } from './dto/create-family-relation.input';
import { UpdateFamilyRelationInput } from './dto/update-family-relation.input';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { RelationType } from 'src/relation-types/entities/relation-type.entity';

@Resolver(() => FamilyRelation)
export class FamilyRelationsResolver {
  constructor(
    private readonly familyRelationsService: FamilyRelationsService
  ) {}

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

  @Query(() => [FamilyRelation], { name: 'familyRelationsByFamilyMemberId' })
  FamilyRelationsByFamilyMemberId(
    @Args('familyMemberId', { type: () => Int }) 
    familyMemberId: number
  ): Promise<FamilyRelation[]> {
    return this.familyRelationsService.findByFamilyMemberId(familyMemberId);
  }

  @Mutation(() => FamilyRelation)
  updateRelationType(
    @Args('id', { type: () => Int }) 
    id: number,
    @Args('updateFamilyRelationInput') 
    updateFamilyRelationInput: UpdateFamilyRelationInput
  ) {
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

  @ResolveField(() => FamilyMember)
  familyMember(@Parent() familyRelation: FamilyRelation): Promise<FamilyMember> {   
    return this.familyRelationsService.getFamilyMember(familyRelation.familyMemberId);
  }

  @ResolveField(() => FamilyMember)
  relatedFamilyMember(@Parent() familyRelation: FamilyRelation): Promise<FamilyMember> {   
    return this.familyRelationsService.getRelatedFamilyMember(familyRelation.relatedFamilyMemberId);
  }

  @ResolveField(() => RelationType)
  relationType(@Parent() familyRelation: FamilyRelation): Promise<RelationType> {   
    return this.familyRelationsService.getRelationType(familyRelation.relationTypeId);
  }
}