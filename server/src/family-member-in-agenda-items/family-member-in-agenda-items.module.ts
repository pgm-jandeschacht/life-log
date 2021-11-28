import { Module } from '@nestjs/common';
import { FamilyMemberInAgendaItemsService } from './family-member-in-agenda-items.service';
import { FamilyMemberInAgendaItemsResolver } from './family-member-in-agenda-items.resolver';
import { FamilyMemberInAgendaItem } from './entities/family-member-in-agenda-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { AgendaItemsModule } from 'src/agenda-items/agenda-items.module';

@Module({
  imports: [
      TypeOrmModule.forFeature([FamilyMemberInAgendaItem]),
      FamilyMembersModule,
  ],
  providers: [FamilyMemberInAgendaItemsResolver, FamilyMemberInAgendaItemsService],
  exports: [FamilyMemberInAgendaItemsService]
})
export class FamilyMemberInAgendaItemsModule {}
