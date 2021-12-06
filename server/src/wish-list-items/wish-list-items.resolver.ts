import { 
  Resolver, 
  Query, 
  Mutation, 
  Args, 
  Int, 
  ResolveField, 
  Parent 
} from '@nestjs/graphql';
import { WishListItemsService } from './wish-list-items.service';
import { WishListItem } from './entities/wish-list-item.entity';
import { CreateWishListItemInput } from './dto/create-wish-list-item.input';
import { UpdateWishListItemInput } from './dto/update-wish-list-item.input';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMemberInWishListItem } from 'src/family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';

@Resolver(() => WishListItem)
export class WishListItemsResolver {
  constructor(
    private readonly wishListItemsService: WishListItemsService
  ) {}

  @Mutation(() => WishListItem)
  async createWishListItem(@Args('createWishListItemInput') createWishListItemInput: CreateWishListItemInput) {
    return this.wishListItemsService.create(createWishListItemInput);
  }

  @Query(() => [WishListItem], { name: 'wishListItems' })
  wishListItems() {
    return this.wishListItemsService.findAll();
  }

  @Query(() => WishListItem, { name: 'wishListItem' })
  wishListItemById(@Args('id', { type: () => Int }) id: number) {
    return this.wishListItemsService.findOneById(id);
  }

  @Query((returns) => [WishListItem], { name: "wishListItemsByAuthor" })
  wishListItemsByAuthor(@Args("authorId", { type: () => Int }) authorId: number) {
    return this.wishListItemsService.findAllByAuthor(authorId);
  }

  @ResolveField(returns => FamilyMember)
  author(@Parent() wishListItem: WishListItem): Promise<FamilyMember> {
    return this.wishListItemsService.getAuthor(wishListItem.authorId);
  }

  @ResolveField(returns => [FamilyMemberInWishListItem] )
  inWishListItem( @Parent() wishListItem: WishListItem ): Promise<any> {
    return this.wishListItemsService.getInvolvedFamilyMembers(wishListItem.id);
  }

  @Mutation(() => WishListItem)
  updateWishListItem(@Args('id', { type: () => Int }) id: number, @Args('updateWishListItemInput') updateWishListItemInput: UpdateWishListItemInput) {
    return this.wishListItemsService.update(id, updateWishListItemInput);
  }

  @Mutation(() => WishListItem)
  deleteWishListItem(@Args('id', { type: () => Int }) id: number) {
    const toBeDeletedWishListItem = this.wishListItemsService.findOneById(id);
    if(toBeDeletedWishListItem) {
        this.wishListItemsService.delete(id);
        return toBeDeletedWishListItem;
    } else {
        return null;
    }
  }
}
