import { Test, TestingModule } from '@nestjs/testing';
import { HelpPagesService } from './help-pages.service';

describe('HelpPagesService', () => {
  let service: HelpPagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpPagesService],
    }).compile();

    service = module.get<HelpPagesService>(HelpPagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
