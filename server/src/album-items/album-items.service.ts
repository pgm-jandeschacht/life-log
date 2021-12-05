import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMemberInAlbumItem } from 'src/family-member-in-album-items/entities/family-member-in-album-item.entity';
import { FamilyMemberInAlbumItemsService } from 'src/family-member-in-album-items/family-member-in-album-items.service';
import { FamilyRelationsService } from 'src/family-relations/family-relations.service';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateAlbumItemInput } from './dto/create-album-item.input';
import { UpdateAlbumItemInput } from './dto/update-album-item.input';
import { AlbumItem } from './entities/album-item.entity';

@Injectable()
export class AlbumItemsService {
  constructor(
    @InjectRepository(AlbumItem) 
    private albumItemRepository: Repository<AlbumItem>, 
    private familyMemberService: FamilyMembersService,
    private familyMemberInAlbumItemService: FamilyMemberInAlbumItemsService,
    private familyRelatiosnService: FamilyRelationsService
  ) {};

  create(createAlbumItemInput: CreateAlbumItemInput): Promise<AlbumItem> {
    const newAlbumItem = this.albumItemRepository.create(createAlbumItemInput);
    return this.albumItemRepository.save(newAlbumItem);
  }

  findAll(): Promise<AlbumItem[]> {
    return this.albumItemRepository.find();
  }

  findOneById(id: number) {
    return this.albumItemRepository.findOneOrFail(id);
  }
  
  getUploader(uploaderId: number): Promise<FamilyMember> {
    return this.familyMemberService.findOneById(uploaderId);
  }


  findAllByAuthor(uploaderId: number): Promise<AlbumItem[]> {
    return this.albumItemRepository.find({
      where: {
          uploaderId: uploaderId
      }
    });
  }

  async findAllByFamilyMemberIFollow(familyMemberId: number): Promise<AlbumItem[]> {
    const peopleIFollow = await this.familyRelatiosnService.findByFamilyMemberId(familyMemberId);
    // console.log('peopleIFollow......', peopleIFollow);
    let albumItems = [];
    peopleIFollow.forEach(async (relation) => {
      const albumItemsByFamilyMember = this.findAllByAuthor(relation.relatedFamilyMember.id);
      // albumItems = albumItems.concat(albumItems, ... await albumItemsByFamilyMember);
      // let test = [];
      // console.log('albumItemsByFamilyMember......', await albumItemsByFamilyMember);
      albumItems = albumItems.concat( ... await albumItemsByFamilyMember);
      // console.log('albumItems......', albumItems);
      // console.log('test......', test);
      // console.log('albumItems........',   await albumItemsByFamilyMember);
      // albumItems.concat(... await albumItemsByFamilyMember)
      
      // console.log('albumItems......', await albumItemsByFamilyMember);
    });
    // console.log('albumItems......', albumItems);
    return albumItems;
  
  }

  async getInvolvedFamilyMembers(id: number): Promise<FamilyMemberInAlbumItem[]> {
    console.log('GET INVOLVED FAMILY MEMBERS......');
    console.log('data......,', await this.familyMemberInAlbumItemService.findAllByAlbumItemId(id));
    return this.familyMemberInAlbumItemService.findAllByAlbumItemId(id);
  }

  async update(id: number, updateAlbumItemInput: UpdateAlbumItemInput): Promise<AlbumItem> {
    return this.albumItemRepository.save({ id: id, ...updateAlbumItemInput })
  }

  async delete(id: number): Promise<AlbumItem> {
    const albumItem = await this.findOneById(id);
    return this.albumItemRepository.remove(albumItem);
  }
}
