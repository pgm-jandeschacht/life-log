import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMemberInWishListItem } from 'src/family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';
import { Repository } from 'typeorm';
import { CreateFamilyMemberInAlbumItemInput } from './dto/create-family-member-in-album-item.input';
import { UpdateFamilyMemberInAlbumItemInput } from './dto/update-family-member-in-album-item.input';
import { FamilyMemberInAlbumItem } from './entities/family-member-in-album-item.entity';

@Injectable()
export class FamilyMemberInAlbumItemsService {
  constructor(
    @InjectRepository(FamilyMemberInAlbumItem)
    private familyMemberInAlbumItemRepository: Repository<FamilyMemberInAlbumItem>
  ) {}

  create(createFamilyMemberInAlbumItemInput: CreateFamilyMemberInAlbumItemInput): Promise<FamilyMemberInAlbumItem> {
    const newFamilyMemberInAlbum = this.familyMemberInAlbumItemRepository.create(createFamilyMemberInAlbumItemInput);
    return this.familyMemberInAlbumItemRepository.save(newFamilyMemberInAlbum);
  }

  findAll(): Promise<FamilyMemberInAlbumItem[]> {
    return this.familyMemberInAlbumItemRepository.find();
  }

  findOneById(id: number): Promise<FamilyMemberInAlbumItem> {
    return this.familyMemberInAlbumItemRepository.findOneOrFail(id);
  }

  async findAllByAlbumItemId(albumItemId: number): Promise<FamilyMemberInAlbumItem[]> {
    console.log('ALBMUTITEM ID......', albumItemId);
    console.log('DATA IN MANY TO MANY.........', await this.familyMemberInAlbumItemRepository.find({
      where: {
        albumItemId: albumItemId
      },
      relations: [ 'familyMember']
    }));
    return this.familyMemberInAlbumItemRepository.find({
      where: {
        albumItemId: albumItemId
      },
      relations: [ 'familyMember']
    })
  }

  // Get all wishlist Items where a familyMember Appears in
  async findAllByFamilyMemberId(familyMemberId: number): Promise <FamilyMemberInAlbumItem[]> {
    return this.familyMemberInAlbumItemRepository.find({
      where: {
        familyMemberId: familyMemberId
      },
      relations: ['albumItem']
    })
  }

  update(id: number, updateFamilyMemberInAlbumItemInput: UpdateFamilyMemberInAlbumItemInput): Promise<FamilyMemberInAlbumItem> {
    return this.familyMemberInAlbumItemRepository.save(
      {
        id: id,
        ...updateFamilyMemberInAlbumItemInput
      }
    )
  }

  async delete(id: number): Promise<FamilyMemberInAlbumItem> {
    const familyMemberInAlbumtem = await this.findOneById(id);
    return this.familyMemberInAlbumItemRepository.remove(familyMemberInAlbumtem);
  }
}
