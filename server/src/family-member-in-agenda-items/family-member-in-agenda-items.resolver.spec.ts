import { 
  Test, 
  TestingModule 
} from '@nestjs/testing';
import { FamilyMemberInAgendaItemsResolver } from './family-member-in-agenda-items.resolver';
import { FamilyMemberInAgendaItemsService } from './family-member-in-agenda-items.service';

describe('FamilyMembersInAgendaItemsResolver', () => {
  let resolver: FamilyMemberInAgendaItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMemberInAgendaItemsResolver, FamilyMemberInAgendaItemsService],
    }).compile();

    resolver = module.get<FamilyMemberInAgendaItemsResolver>(FamilyMemberInAgendaItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
