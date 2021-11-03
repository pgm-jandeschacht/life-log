import { Test, TestingModule } from '@nestjs/testing';
import { WishListItemsService } from './wish-list-items.service';

describe('WishListItemsService', () => {
  let service: WishListItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishListItemsService],
    }).compile();

    service = module.get<WishListItemsService>(WishListItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
