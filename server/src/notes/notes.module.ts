import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';

@Module({
    imports: [TypeOrmModule.forFeature([Note]), FamilyMembersModule],
  providers: [NotesResolver, NotesService]
})
export class NotesModule {}
