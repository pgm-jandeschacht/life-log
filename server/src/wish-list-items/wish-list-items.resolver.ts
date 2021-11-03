import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { WishListItemsService } from './wish-list-items.service';
import { WishListItem } from './entities/wish-list-item.entity';
import { CreateWishListItemInput } from './dto/create-wish-list-item.input';
import { UpdateWishListItemInput } from './dto/update-wish-list-item.input';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';

@Resolver(() => WishListItem)
export class WishListItemsResolver {
  constructor(private readonly wishListItemsService: WishListItemsService) {}

  @Mutation(() => WishListItem)
  createWishListItem(@Args('createWishListItemInput') createWishListItemInput: CreateWishListItemInput) {
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

  @ResolveField(returns => FamilyMember)
  uploader(@Parent() wishListItem: WishListItem): Promise<FamilyMember> {
    //console.log('AUTHOR RESOLVER');  
    //console.log(note);
      return this.wishListItemsService.getUploader(wishListItem.authorId);
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
