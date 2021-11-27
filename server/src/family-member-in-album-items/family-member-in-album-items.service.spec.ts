import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMemberInAlbumItemsService } from './family-member-in-album-items.service';

describe('FamilyMemberInAlbumItemsService', () => {
  let service: FamilyMemberInAlbumItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMemberInAlbumItemsService],
    }).compile();

    service = module.get<FamilyMemberInAlbumItemsService>(FamilyMemberInAlbumItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
