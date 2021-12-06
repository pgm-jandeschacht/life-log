import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMemberInWishListItem } from 'src/family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';
import { FamilyMemberInWishListItemsService } from 'src/family-member-in-wish-list-item/family-member-in-wish-list-items.service';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { getRepository, Repository } from 'typeorm';
import { CreateWishListItemInput } from './dto/create-wish-list-item.input';
import { UpdateWishListItemInput } from './dto/update-wish-list-item.input';
import { WishListItem } from './entities/wish-list-item.entity';

@Injectable()
export class WishListItemsService {
  constructor(
    @InjectRepository(WishListItem) 
    private wishListItemRepository: Repository<WishListItem>, 
    private familyMemberService: FamilyMembersService,
    private familyMemberInWishListItemService: FamilyMemberInWishListItemsService
  ) {};

  async create(createWishListItemInput: CreateWishListItemInput): Promise<WishListItem> {
    const newWishListItem = await this.wishListItemRepository.create(createWishListItemInput); 
    const createdWish = await this.wishListItemRepository.save(newWishListItem);
    
    // when array is given with familyMembers
    if(createWishListItemInput.inWish) {
      createWishListItemInput.inWish.forEach(inWish => {
        this.familyMemberInWishListItemService.create({
          familyMemberId: inWish,
          wishListItemId: createdWish.id
        })
      });
    } 
    return createdWish;
  }

  findAll(): Promise<WishListItem[]> {
    return this.wishListItemRepository.find();
  }

  findOneById(id: number) {
    return this.wishListItemRepository.findOneOrFail(id);
  }

  async update(id: number, updateWishListItemInput: UpdateWishListItemInput): Promise<WishListItem> {
    return this.wishListItemRepository.save({ id: id, ...updateWishListItemInput })
  }

  async delete(id: number): Promise<WishListItem> {
    const albumItem = await this.findOneById(id);
    return this.wishListItemRepository.remove(albumItem);
  }

  getAuthor(authorId: number): Promise<FamilyMember> {
    return this.familyMemberService.findOneById(authorId);
  }

  findAllByAuthor(authorId: number): Promise<WishListItem[]> {
    return this.wishListItemRepository.find({
      where: {
          authorId: authorId
      }
    });
  }

  async getInvolvedFamilyMembers(wishListItemId: number): Promise<FamilyMemberInWishListItem[]> {
    return this.familyMemberInWishListItemService.findAllByWishListItemId(wishListItemId);
  }

  async inWishList(wishListItemId: number): Promise<FamilyMember[]> {
    const familyMembers = await getRepository(FamilyMember)
    .createQueryBuilder('familyMember')
    .leftJoinAndSelect('familyMember.wishListItems.inWishListItem.familyMember', 'familyMember')
    .where("wishListItems.id = :id", { id: wishListItemId })
    .getMany();

    return familyMembers;
  }
}
