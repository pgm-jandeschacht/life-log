import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMemberInWishListItemsResolver } from './family-member-in-wish-list-items.resolver';
import { FamilyMemberInWishListItemsService } from './family-member-in-wish-list-items.service';

describe('FamilyMemberInWishListItemsResolver', () => {
  let resolver: FamilyMemberInWishListItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMemberInWishListItemsResolver, FamilyMemberInWishListItemsService],
    }).compile();

    resolver = module.get<FamilyMemberInWishListItemsResolver>(FamilyMemberInWishListItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
