import { Test, TestingModule } from '@nestjs/testing';
import { AlbumItemsResolver } from './album-items.resolver';
import { AlbumItemsService } from './album-items.service';

describe('AlbumItemsResolver', () => {
  let resolver: AlbumItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumItemsResolver, AlbumItemsService],
    }).compile();

    resolver = module.get<AlbumItemsResolver>(AlbumItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
