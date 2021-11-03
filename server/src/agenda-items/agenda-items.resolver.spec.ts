import { Test, TestingModule } from '@nestjs/testing';
import { AgendaItemsResolver } from './agenda-items.resolver';
import { AgendaItemsService } from './agenda-items.service';

describe('AgendaItemsResolver', () => {
  let resolver: AgendaItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaItemsResolver, AgendaItemsService],
    }).compile();

    resolver = module.get<AgendaItemsResolver>(AgendaItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
