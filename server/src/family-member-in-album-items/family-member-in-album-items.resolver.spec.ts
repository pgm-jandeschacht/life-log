import { 
  Test, 
  TestingModule 
} from '@nestjs/testing';
import { FamilyMemberInAlbumItemsResolver } from './family-member-in-album-items.resolver';
import { FamilyMemberInAlbumItemsService } from './family-member-in-album-items.service';

describe('FamilyMemberInAlbumItemsResolver', () => {
  let resolver: FamilyMemberInAlbumItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMemberInAlbumItemsResolver, FamilyMemberInAlbumItemsService],
    }).compile();

    resolver = module.get<FamilyMemberInAlbumItemsResolver>(FamilyMemberInAlbumItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
