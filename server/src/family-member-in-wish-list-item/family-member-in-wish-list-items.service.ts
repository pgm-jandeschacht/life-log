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

  create(createFamilyMemberInWishListItemInput: CreateFamilyMemberInWishListItemInput): Promise<FamilyMemberInWishListItem> {
    const newFamFamilyMemberInWishListItem = this.familyMemberInWishListItemRepository.create(createFamilyMemberInWishListItemInput);
    return this.familyMemberInWishListItemRepository.save(newFamFamilyMemberInWishListItem);
  }

  findAll(): Promise<FamilyMemberInWishListItem[]> {
    return this.familyMemberInWishListItemRepository.find();
  }

  findOneById(id: number): Promise<FamilyMemberInWishListItem> {
    return this.familyMemberInWishListItemRepository.findOneOrFail(id);
  }

  // Get all familyMembers related to a wishlist item
  async findAllByWishListItemId(wishListItemId: number): Promise<FamilyMemberInWishListItem[]> {
    return this.familyMemberInWishListItemRepository.find({
      where: {
        wishListItemId: wishListItemId
      },
      relations: ['familyMember']
    })
  }

  // Get all wishlist Items where a familyMember Appears in
  async findAllByFamilyMemberId(familyMemberId: number): Promise <FamilyMemberInWishListItem[]> {
    return this.familyMemberInWishListItemRepository.find({
      where: {
        familyMemberId: familyMemberId
      },
      relations: ['wishListItem']
    })
  }

  // CHECK if this is double??
  async getInvolvedFamilyMembers(id: number): Promise<any> {
    const familyMembers = this.familyMemberInWishListItemRepository.find({
        where: {
            wishListItemId: id
        },
        relations: ['familyMember']
    })
    return familyMembers;
  }

  update(id: number, updateFamilyMemberInWishListItemInput: UpdateFamilyMemberInWishListItemInput): Promise<FamilyMemberInWishListItem> {
    return this.familyMemberInWishListItemRepository.save(
      {
        id: id,
        ...updateFamilyMemberInWishListItemInput
      }
    )
  }

  async delete(id: number) {
    const familyMemberInWishListItem = await this.findOneById(id);
    return this.familyMemberInWishListItemRepository.remove(familyMemberInWishListItem);
  }



  // getInvitedFamilyMembers(id: number): Promise<FamilyMember[] | any[]> {
    //     const famMembers = this.agendaItemRepository.find({
    //         where: {
    //             id: id
    //         },
    //         relations: ['with']
    //     })
}
