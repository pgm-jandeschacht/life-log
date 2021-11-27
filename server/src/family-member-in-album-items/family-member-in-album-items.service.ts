import { Injectable } from '@nestjs/common';
import { CreateFamilyMemberInAlbumItemInput } from './dto/create-family-member-in-album-item.input';
import { UpdateFamilyMemberInAlbumItemInput } from './dto/update-family-member-in-album-item.input';

@Injectable()
export class FamilyMemberInAlbumItemsService {
  create(createFamilyMemberInAlbumItemInput: CreateFamilyMemberInAlbumItemInput) {
    return 'This action adds a new FamilyMemberInAlbumItem';
  }

  findAll() {
    return `This action returns all FamilyMemberInAlbumItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} FamilyMemberInAlbumItem`;
  }

  update(id: number, updateFamilyMemberInAlbumItemInput: UpdateFamilyMemberInAlbumItemInput) {
    return `This action updates a #${id} FamilyMemberInAlbumItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} FamilyMemberInAlbumItem`;
  }
}
