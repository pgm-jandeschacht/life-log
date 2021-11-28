import { 
  Test, 
  TestingModule 
} from '@nestjs/testing';
import { AlbumItemsService } from './album-items.service';

describe('AlbumItemsService', () => {
  let service: AlbumItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumItemsService],
    }).compile();

    service = module.get<AlbumItemsService>(AlbumItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
