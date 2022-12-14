import { 
  Resolver, 
  Query, 
  Mutation, 
  Args, 
  Int 
} from '@nestjs/graphql';
import { FamilyMemberInAlbumItemsService } from './family-member-in-album-items.service';
import { FamilyMemberInAlbumItem } from './entities/family-member-in-album-item.entity';
import { CreateFamilyMemberInAlbumItemInput } from './dto/create-family-member-in-album-item.input';

@Resolver(() => FamilyMemberInAlbumItem)
export class FamilyMemberInAlbumItemsResolver {
  constructor(
    private readonly FamilyMemberInAlbumItemsService: FamilyMemberInAlbumItemsService
  ) {}

  @Mutation(() => FamilyMemberInAlbumItem)
  createFamilyMemberInAlbumItem(
    @Args('createFamilyMemberInAlbumItemInput') 
    createFamilyMemberInAlbumItemInput: CreateFamilyMemberInAlbumItemInput
  ) {
    return this.FamilyMemberInAlbumItemsService.create(createFamilyMemberInAlbumItemInput);
  }

  @Query(() => [FamilyMemberInAlbumItem], { name: 'FamilyMemberInAlbumItems' })
  findAll() {
    return this.FamilyMemberInAlbumItemsService.findAll();
  }

  @Query(() => FamilyMemberInAlbumItem, { name: 'FamilyMemberInAlbumItem' })
  findOne(
    @Args('id', { type: () => Int }) 
    id: number
  ) {
    return this.FamilyMemberInAlbumItemsService.findOneById(id);
  }

  @Query((returns) => [FamilyMemberInAlbumItem], { name: 'FamilyMemberInAlbumItemsByFamilyMemberId' })
  findAllByFamilyMemberId(
    @Args('familyMemberId', { type: () => Int })
    familyMemberId: number
  ) {
    return this.FamilyMemberInAlbumItemsService.findAllByFamilyMemberId(familyMemberId);
  }

  @Mutation(() => FamilyMemberInAlbumItem)
  removeFamilyMemberInAlbumItem(@Args('id', { type: () => Int }) id: number) {
    return this.FamilyMemberInAlbumItemsService.delete(id);
  }
}
