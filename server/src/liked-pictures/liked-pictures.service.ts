import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumItemsService } from 'src/album-items/album-items.service';
import { AlbumItem } from 'src/album-items/entities/album-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateLikedPictureInput } from './dto/create-liked-picture.input';
import { UpdateLikedPictureInput } from './dto/update-liked-picture.input';
import { LikedPicture } from './entities/liked-picture.entity';

@Injectable()
export class LikedPicturesService {
  constructor(
    @InjectRepository(LikedPicture)
    private likedPictureRepository: Repository<LikedPicture>,
    private familyMemberService: FamilyMembersService,
    private albumItemService: AlbumItemsService,
  ) {}

  create(createLikedPictureInput: CreateLikedPictureInput): Promise<LikedPicture> {
    const newLikedPiture = this.likedPictureRepository.create(createLikedPictureInput);
    return this.likedPictureRepository.save(newLikedPiture);
  }

  // async likePicture(familyMemberId: number, albumItemId: number): Promise<LikedPicture> {
  //   return this.likedPictureRepository.update([
  //     {
  //       familyMemberId: familyMemberId,
  //       albumItemId: albumItemId,
        
  //     }
  //   ]);
  // }

  findAll(): Promise<LikedPicture[]> {
    return this.likedPictureRepository.find();
  }

  findOneById(id: number): Promise<LikedPicture> {
    return this.likedPictureRepository.findOneOrFail(id);
  }

  findByFamilyMemberId(id: number): Promise<LikedPicture[]> {
    return this.likedPictureRepository.find({where: {familyMemberId: id}});
  }

  findByFamilyMemberIdAndAlbumItemId(familyMemberId: number, albumItemId: number): Promise<LikedPicture> {
    return this.likedPictureRepository.findOneOrFail({
      where: {
        familyMemberId: familyMemberId, 
        albumItemId: albumItemId
      }
    });
    // return this.likedPictureRepository.findOneOrFail({
    //   where: {
    //     familyMemberId: familyMemberId, 
    //     albumItemId: albumItemId
    //   }
    // });
  }

  async update(id: number, updateLikedPictureInput: UpdateLikedPictureInput): Promise<LikedPicture> {
    return this.likedPictureRepository.save({id: id, ...updateLikedPictureInput});
  }

  async delete(id: number): Promise<LikedPicture> {
    const likedPicture = await this.findOneById(id);
    return this.likedPictureRepository.remove(likedPicture);
  }

  async removeLike(tobeDeletedPicture: CreateLikedPictureInput): Promise<any> {
    const likeInDb = this.likedPictureRepository.findOneOrFail({
      where: {
        familyMemberId: tobeDeletedPicture.familyMemberId,
        albumItemId: tobeDeletedPicture.albumItemId
      }
    });
  
    this.likedPictureRepository.remove(await likeInDb);
    return likeInDb;
  }

  getFamilyMember(familyMemberId: number): Promise<FamilyMember> {
    return this.familyMemberService.findOneById(familyMemberId);
  }

  getAlbumItem(albumItemId: number): Promise<AlbumItem> {
    return this.albumItemService.findOneById(albumItemId);
  }
}
