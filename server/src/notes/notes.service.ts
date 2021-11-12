import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Note) 
        private noteRepository: Repository<Note>, 
        private familyMemberService: FamilyMembersService
    ) {};
  
    create(createNoteInput: CreateNoteInput): Promise<Note> {
        const newNote = this.noteRepository.create(createNoteInput);

        return this.noteRepository.save(newNote);
    }

    findAll(): Promise<Note[]> {
        return this.noteRepository.find();
    }

    findOneById(id: number): Promise<Note> {
        return this.noteRepository.findOneOrFail(id);
    }
    
    async update(id: number, updateNoteInput: UpdateNoteInput): Promise<Note> {
        return this.noteRepository.save({id: id, ...updateNoteInput});
    }

    async delete(id: number): Promise<Note> {
        const note = await this.findOneById(id);

        return this.noteRepository.remove(note);
    }

    getAuthor(authorId: number) : Promise<FamilyMember> {
        return this.familyMemberService.findOneById(authorId);
    }
}
