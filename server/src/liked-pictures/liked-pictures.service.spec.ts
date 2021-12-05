import { 
  Test, 
  TestingModule 
} from '@nestjs/testing';
import { LikedPicturesService } from './liked-pictures.service';

describe('LikedPicturesService', () => {
  let service: LikedPicturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikedPicturesService],
    }).compile();

    service = module.get<LikedPicturesService>(LikedPicturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
