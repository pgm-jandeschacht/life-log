import { Module } from '@nestjs/common';
import { HelpPagesService } from './help-pages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpPagesResolver } from './help-pages.resolver';
import { HelpPage } from './entities/help-page.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HelpPage]),
  ],
  providers: [HelpPagesResolver, HelpPagesService],
  exports: [HelpPagesService],
})
export class HelpPagesModule {}
