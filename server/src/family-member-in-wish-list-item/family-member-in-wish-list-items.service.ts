import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateFamilyMemberInWishListItemInput } from './dto/create-family-member-in-wish-list-item.input';
import { UpdateFamilyMemberInWishListItemInput } from './dto/update-family-member-in-wish-list-item.input';
import { FamilyMemberInWishListItem } from './entities/family-members-in-wish-list-item.entity';

@Injectable()
export class FamilyMemberInWishListItemsService {
    constructor(
        @InjectRepository(FamilyMemberInWishListItem)
        private readonly familyMemberInWishListItemRepository: Repository<FamilyMemberInWishListItem>,
        private familyMembersService: FamilyMembersService,

    ){}
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

  async getInvolvedFamilyMembers(id: number): Promise<any> {
    //return `This action returns all family members involved in wish list item #${wishListId}`;
    const familyMembers = this.familyMemberInWishListItemRepository.find({
        where: {
            wishListItemId: id
        },
        relations: ['familyMember']
    })
    return familyMembers;
  }


  // getInvitedFamilyMembers(id: number): Promise<FamilyMember[] | any[]> {
    //     const famMembers = this.agendaItemRepository.find({
    //         where: {
    //             id: id
    //         },
    //         relations: ['with']
    //     })
}
