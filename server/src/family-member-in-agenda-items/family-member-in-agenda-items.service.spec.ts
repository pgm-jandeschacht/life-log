import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMemberInAgendaItemsService } from './family-member-in-agenda-items.service';

describe('FamilyMemberInAgendaItemsService', () => {
  let service: FamilyMemberInAgendaItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMemberInAgendaItemsService],
    }).compile();

    service = module.get<FamilyMemberInAgendaItemsService>(FamilyMemberInAgendaItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
