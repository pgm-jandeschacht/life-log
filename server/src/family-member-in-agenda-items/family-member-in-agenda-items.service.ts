import { Injectable } from '@nestjs/common';
import { CreateFamilyMemberInAgendaItemInput } from './dto/create-family-member-in-agenda-item.input';
import { UpdateFamilyMemberInAgendaItemInput } from './dto/update-family-member-in-agenda-item.input';

@Injectable()
export class FamilyMemberInAgendaItemsService {
  create(createFamilyMemberInAgendaItemInput: CreateFamilyMemberInAgendaItemInput) {
    return 'This action adds a new FamilyMemberInAgendaItem';
  }

  findAll() {
    return `This action returns all FamilyMemberInAgendaItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} FamilyMemberInAgendaItem`;
  }

  update(id: number, updateFamilyMemberInAgendaItemInput: UpdateFamilyMemberInAgendaItemInput) {
    return `This action updates a #${id} FamilyMemberInAgendaItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} FamilyMemberInAgendaItem`;
  }
}
