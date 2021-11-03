import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMembersResolver } from './Family-members.resolver';

describe('FamilyMemberResolver', () => {
  let resolver: FamilyMembersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMembersResolver],
    }).compile();

    resolver = module.get<FamilyMembersResolver>(FamilyMembersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
