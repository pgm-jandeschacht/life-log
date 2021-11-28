import { Module } from '@nestjs/common';
import { AgendaItemsService } from './agenda-items.service';
import { AgendaItemsResolver } from './agenda-items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaItem } from 'src/agenda-items/entities/agenda-item.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { FamilyMemberInAgendaItemsModule } from 'src/family-member-in-agenda-items/family-member-in-agenda-items.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([AgendaItem]),
      FamilyMembersModule,
      FamilyMemberInAgendaItemsModule
    ],
  providers: [AgendaItemsResolver, AgendaItemsService],
  exports: [AgendaItemsService]
})
export class AgendaItemsModule {}
