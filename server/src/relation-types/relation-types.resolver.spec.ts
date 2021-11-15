import { Test, TestingModule } from '@nestjs/testing';
import { RelationTypesResolver } from './relation-types.resolver';
import { RelationTypesService } from './relation-types.service';

describe('RelationTypesResolver', () => {
  let resolver: RelationTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationTypesResolver, RelationTypesService],
    }).compile();

    resolver = module.get<RelationTypesResolver>(RelationTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
