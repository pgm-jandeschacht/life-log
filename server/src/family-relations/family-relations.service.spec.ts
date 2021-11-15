import { Test, TestingModule } from '@nestjs/testing';
import { FamilyRelationsService } from './family-relations.service';

describe('FamilyRelationsService', () => {
  let service: FamilyRelationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyRelationsService],
    }).compile();

    service = module.get<FamilyRelationsService>(FamilyRelationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
