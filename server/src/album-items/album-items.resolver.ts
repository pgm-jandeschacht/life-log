import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { AlbumItemsService } from './album-items.service';
import { AlbumItem } from './entities/album-item.entity';
import { CreateAlbumItemInput } from './dto/create-album-item.input';
import { UpdateAlbumItemInput } from './dto/update-album-item.input';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';

@Resolver((of) => AlbumItem)
export class AlbumItemsResolver {
  constructor(private readonly albumItemsService: AlbumItemsService) {}

  @Mutation(() => AlbumItem)
  createAlbumItem(@Args('createAlbumItemInput') createAlbumItemInput: CreateAlbumItemInput) {
    return this.albumItemsService.create(createAlbumItemInput);
  }

  @Query(() => [AlbumItem], { name: 'albumItems' })
  albumItems() {
    return this.albumItemsService.findAll();
  }

  @Query(() => AlbumItem, { name: 'albumItem' })
  albumItemById(@Args('id', { type: () => Int }) id: number) {
    return this.albumItemsService.findOneById(id);
  }

  @ResolveField(returns => FamilyMember)
  uploader(@Parent() albumItem: AlbumItem): Promise<FamilyMember> {
    //console.log('AUTHOR RESOLVER');  
    //console.log(note);
      return this.albumItemsService.getUploader(albumItem.uploaderId);
  }

  @Mutation(() => AlbumItem)
  updateAlbumItem(@Args('id', { type: () => Int }) id: number, @Args('updateAlbumItemInput') updateAlbumItemInput: UpdateAlbumItemInput) {
    return this.albumItemsService.update(id, updateAlbumItemInput);
  }

  @Mutation(() => AlbumItem)
  deleteAlbumItem(@Args('id', { type: () => Int }) id: number) {
    const toBeDeletedAlbumItem = this.albumItemsService.findOneById(id);
    if(toBeDeletedAlbumItem) {
        this.albumItemsService.delete(id);
        return toBeDeletedAlbumItem;
    } else {
        return null;
    }
  }
}
