import { 
  Resolver, 
  Query, 
  Mutation, 
  Args, 
  Int 
} from '@nestjs/graphql';
import { RelationTypesService } from './relation-types.service';
import { RelationType } from './entities/relation-type.entity';
import { CreateRelationTypeInput } from './dto/create-relation-type.input';
import { UpdateRelationTypeInput } from './dto/update-relation-type.input';

@Resolver(() => RelationType)
export class RelationTypesResolver {
  constructor(
    private readonly relationTypesService: RelationTypesService
  ) {}

  @Mutation(() => RelationType)
  createRelationType(@Args('createRelationTypeInput') createRelationTypeInput: CreateRelationTypeInput) {
    return this.relationTypesService.create(createRelationTypeInput);
  }

  @Query(() => [RelationType], { name: 'relationTypes' })
  relationTypes(): Promise<RelationType[]> {
    return this.relationTypesService.findAll();
  }

  @Query(() => RelationType, { name: 'relationType' })
  relationTypeById(@Args('id', { type: () => Int }) id: number): Promise<RelationType> {
    return this.relationTypesService.findOneById(id);
  }

  @Mutation(() => RelationType)
  updateRelationType(
    @Args('id', { type: () => Int }) 
    id: number,
    @Args('updateRelationTypeInput') 
    updateRelationTypeInput: UpdateRelationTypeInput
  ) {
    return this.relationTypesService.update(id, updateRelationTypeInput);
  }

  @Mutation(() => RelationType)
  removeRelationType(@Args('id', { type: () => Int }) id: number):Promise<RelationType> {
      const toBeDeletedRelationType = this.relationTypesService.findOneById(id);
      if(toBeDeletedRelationType){
          return this.relationTypesService.delete(id);
      } else {
          return null;
      }
  }
}
