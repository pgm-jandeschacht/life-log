import { 
  Resolver, 
  Query, 
  Mutation, 
  Args, 
  Int, 
  ResolveField,
  Parent
} from '@nestjs/graphql';
import { LikedPicturesService } from './liked-pictures.service';
import { LikedPicture } from './entities/liked-picture.entity';
import { CreateLikedPictureInput } from './dto/create-liked-picture.input';
import { UpdateLikedPictureInput } from './dto/update-liked-picture.input';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { AlbumItem } from 'src/album-items/entities/album-item.entity';

@Resolver(() => LikedPicture)
export class LikedPicturesResolver {
  constructor(
    private readonly likedPicturesService: LikedPicturesService
  ) {}

  @Mutation(() => LikedPicture)
  createLikedPicture(@Args('createLikedPictureInput') createLikedPictureInput: CreateLikedPictureInput) {
    return this.likedPicturesService.create(createLikedPictureInput);
  }

  @Query(() => [LikedPicture], { name: 'likedPictures' })
  likedPictures() {
    return this.likedPicturesService.findAll();
  }

  @Query(() => LikedPicture, { name: 'likedPicture' })
  likedPictureById(@Args('id', { type: () => Int }) id: number) {
    return this.likedPicturesService.findOneById(id);
  }

  @Query(() => [LikedPicture], { name: 'likedPicturesByFamilyMemberId' })
  likedPicturesByFamilyMemberId(
    @Args('familyMemberId', { type: () => Int }) 
    familyMemberId: number
  ) : Promise<LikedPicture[]> {
    return this.likedPicturesService.findByFamilyMemberId(familyMemberId);
  }

  @Mutation(() => LikedPicture)
  updateLikedPicture(
    @Args('id', { type: () => Int }) 
    id: number,
    @Args('updateLikedPictureInput') 
    updateLikedPictureInput: UpdateLikedPictureInput
  ) {
    return this.likedPicturesService.update(id, updateLikedPictureInput);
  }

  @Mutation(() => LikedPicture)
  removeLikedPicture(@Args('id', { type: () => Int }) id: number) {
    const toBeDeletedLikedPicture = this.likedPicturesService.findOneById(id);
    if(toBeDeletedLikedPicture) {
      return this.likedPicturesService.delete(id);
    } else {
      return null;
    }
  }

  @ResolveField(() => FamilyMember)
  familyMember(@Parent() likedPicture: LikedPicture): Promise<FamilyMember> {
    return this.likedPicturesService.getFamilyMember(likedPicture.familyMemberId);
  }

  @ResolveField(() => AlbumItem)
  albumItem(@Parent() likedPicture: LikedPicture): Promise<AlbumItem> {
    return this.likedPicturesService.getAlbumItem(likedPicture.albumItemId);
  }
}
