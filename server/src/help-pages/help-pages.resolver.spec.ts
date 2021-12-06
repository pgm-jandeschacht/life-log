import { Test, TestingModule } from '@nestjs/testing';
import { HelpPagesResolver } from './help-pages.resolver';
import { HelpPagesService } from './help-pages.service';

describe('HelpPagesResolver', () => {
  let resolver: HelpPagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpPagesResolver, HelpPagesService],
    }).compile();

    resolver = module.get<HelpPagesResolver>(HelpPagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
