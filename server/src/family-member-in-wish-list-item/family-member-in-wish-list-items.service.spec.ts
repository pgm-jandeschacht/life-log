import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMemberInWishListItemsService } from './family-member-in-wish-list-items.service';

describe('FamilyMemberInWishListItemService', () => {
  let service: FamilyMemberInWishListItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMemberInWishListItemsService],
    }).compile();

    service = module.get<FamilyMemberInWishListItemsService>(FamilyMemberInWishListItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
