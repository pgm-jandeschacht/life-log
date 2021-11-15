import { Test, TestingModule } from '@nestjs/testing';
import { FamilyRelationsResolver } from './family-relations.resolver';
import { FamilyRelationsService } from './family-relations.service';

describe('FamilyRelationsResolver', () => {
  let resolver: FamilyRelationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyRelationsResolver, FamilyRelationsService],
    }).compile();

    resolver = module.get<FamilyRelationsResolver>(FamilyRelationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
