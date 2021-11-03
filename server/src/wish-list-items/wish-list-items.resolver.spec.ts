import { Test, TestingModule } from '@nestjs/testing';
import { WishListItemsResolver } from './wish-list-items.resolver';
import { WishListItemsService } from './wish-list-items.service';

describe('WishListItemsResolver', () => {
  let resolver: WishListItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishListItemsResolver, WishListItemsService],
    }).compile();

    resolver = module.get<WishListItemsResolver>(WishListItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
