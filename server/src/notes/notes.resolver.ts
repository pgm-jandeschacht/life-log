import { 
  Resolver, 
  Query, 
  Mutation, 
  Args, 
  Int, 
  Parent, 
  ResolveField 
} from '@nestjs/graphql';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';

@Resolver((of) => Note)
export class NotesResolver {
  constructor(
    private readonly notesService: NotesService
  ) {}

  @Mutation(() => Note)
  createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.notesService.create(createNoteInput);
  }

  @Query(() => [Note], { name: 'notes' })
  notes() {
    return this.notesService.findAll();
  }

  @Query(() => Note, { name: 'note' })
  noteById(@Args('id', { type: () => Int }) id: number) {
    return this.notesService.findOneById(id);
  }

  @ResolveField(returns => FamilyMember)
  author(@Parent() note: Note): Promise<FamilyMember> {
    return this.notesService.getAuthor(note.authorId);
  }


  //?? Return doesn't have all the options? f.e. authorId is not visible if not given
  @Mutation(() => Note)
  updateNote(
    @Args('id', { type: () => Int }) 
    id: number, 
    @Args('updateNoteInput') 
    updateNoteInput: UpdateNoteInput
  ) : Promise<Note>{
    return this.notesService.update(id, updateNoteInput);
  }

  //?? Add checks if note is not in database, can't return entity if not in db??
  @Mutation(() => Note)
  deleteNote(@Args('id', { type: () => Int }) id: number) {
    const toBeDeletedNote = this.notesService.findOneById(id);
    if(toBeDeletedNote) {
        this.notesService.delete(id);
        return toBeDeletedNote;
    } else {
        return null;
    }
  }
}