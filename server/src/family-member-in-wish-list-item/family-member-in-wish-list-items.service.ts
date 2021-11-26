import { Injectable } from '@nestjs/common';
import { CreateFamilyMemberInWishListItemInput } from './dto/create-family-member-in-wish-list-item.input';
import { UpdateFamilyMemberInWishListItemInput } from './dto/update-family-member-in-wish-list-item.input';

@Injectable()
export class FamilyMemberInWishListItemsService {
  create(createFamilyMemberInWishListItemInput: CreateFamilyMemberInWishListItemInput) {
    return 'This action adds a new FamilyMemberInWishListItem';
  }

  findAll() {
    return `This action returns all FamilyMemberInWishListItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} FamilyMemberInWishListItem`;
  }

  update(id: number, updateFamilyMemberInWishListItemInput: UpdateFamilyMemberInWishListItemInput) {
    return `This action updates a #${id} FamilyMemberInWishListItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} FamilyMemberInWishListItem`;
  }
}
