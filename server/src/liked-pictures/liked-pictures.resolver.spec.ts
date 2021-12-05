import { Test, TestingModule } from '@nestjs/testing';
import { LikedPicturesResolver } from './liked-pictures.resolver';
import { LikedPicturesService } from './liked-pictures.service';

describe('LikedPicturesResolver', () => {
  let resolver: LikedPicturesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikedPicturesResolver, LikedPicturesService],
    }).compile();

    resolver = module.get<LikedPicturesResolver>(LikedPicturesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
