import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMemberInAgendaItem } from 'src/family-member-in-agenda-items/entities/family-member-in-agenda-item.entity';
import { FamilyMemberInAgendaItemsService } from 'src/family-member-in-agenda-items/family-member-in-agenda-items.service';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateAgendaItemInput } from './dto/create-agenda-item.input';
import { UpdateAgendaItemInput } from './dto/update-agenda-item.input';
import { AgendaItem } from './entities/agenda-item.entity';

@Injectable()
export class AgendaItemsService {
  constructor(
    @InjectRepository(AgendaItem) 
    private agendaItemRepository: Repository<AgendaItem>, 
    private familyMemberService: FamilyMembersService,
    private familyMemberInAgendaItemService: FamilyMemberInAgendaItemsService
  ) {};

  create(createAgendaItemInput: CreateAgendaItemInput): Promise<AgendaItem> {
    const newAgendaItem = this.agendaItemRepository.create(createAgendaItemInput);
    return this.agendaItemRepository.save(newAgendaItem);
  }

  findAll(): Promise<AgendaItem[]> {
    return this.agendaItemRepository.find();
  }

  findOneById(id: number): Promise<AgendaItem> {
    return this.agendaItemRepository.findOneOrFail(id);
  }

  getAuthor(authorId: number) : Promise<FamilyMember> {
    return this.familyMemberService.findOneById(authorId);
  }

  findAllByAuthor(authorId: number): Promise<AgendaItem[]> {
    return this.agendaItemRepository.find({
      where: {
          authorId: authorId
      }
    });
  }
  
  async getInvitedFamilyMembers(agendaItemId: number): Promise<FamilyMemberInAgendaItem[]> {
    return this.familyMemberInAgendaItemService.findAllByAgendaItemId(agendaItemId);
  }
  
  async update(id: number, updateAgendaItemInput: UpdateAgendaItemInput): Promise<AgendaItem> {
    return this.agendaItemRepository.save({id: id, ...updateAgendaItemInput});
  }

  async delete(id: number): Promise<AgendaItem> {
    const note = await this.findOneById(id);
    return this.agendaItemRepository.remove(note);
  }
}
