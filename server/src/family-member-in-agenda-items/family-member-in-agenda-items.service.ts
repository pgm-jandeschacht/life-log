import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFamilyMemberInAgendaItemInput } from './dto/create-family-member-in-agenda-item.input';
import { UpdateFamilyMemberInAgendaItemInput } from './dto/update-family-member-in-agenda-item.input';
import { FamilyMemberInAgendaItem } from './entities/family-member-in-agenda-item.entity';

@Injectable()
export class FamilyMemberInAgendaItemsService {
  constructor(
    @InjectRepository(FamilyMemberInAgendaItem)
    private familyMemberInAgendaItemRepository: Repository<FamilyMemberInAgendaItem>
  ) {}
  
  create(createFamilyMemberInAgendaItemInput: CreateFamilyMemberInAgendaItemInput): Promise<FamilyMemberInAgendaItem> {
    const newFamFamilyMemberInAgendaItem = this.familyMemberInAgendaItemRepository.create(createFamilyMemberInAgendaItemInput);
    return this.familyMemberInAgendaItemRepository.save(newFamFamilyMemberInAgendaItem);
  }

  findAll(): Promise<FamilyMemberInAgendaItem[]> {
    return this.familyMemberInAgendaItemRepository.find();
  }

  findOneById(id: number): Promise<FamilyMemberInAgendaItem> {
    return this.familyMemberInAgendaItemRepository.findOneOrFail(id);
  }

  // Get all familyMembers related to an agenda Item
  async findAllByAgendaItemId(agendaItemId: number): Promise <FamilyMemberInAgendaItem[]> {
    return this.familyMemberInAgendaItemRepository.find({
      where: {
        agendaItemId: agendaItemId
      },
      relations: ['familyMember']
    })
  }

  // Get all agenda Items where a familyMember Appears in
  async findAllByFamilyMemberId(familyMemberId: number): Promise <FamilyMemberInAgendaItem[]> {
    return this.familyMemberInAgendaItemRepository.find({
      where: {
        familyMemberId: familyMemberId
      },
      relations: ['agendaItem']
    })
  }

  update(id: number, updateFamilyMemberInAgendaItemInput: UpdateFamilyMemberInAgendaItemInput): Promise<FamilyMemberInAgendaItem> {
    return this.familyMemberInAgendaItemRepository.save(
      {
        id: id,
        ...updateFamilyMemberInAgendaItemInput
      }
    )
  }

  async delete(id: number): Promise<FamilyMemberInAgendaItem> {
    const familyMemberInAgendaItem = await this.findOneById(id);
    return this.familyMemberInAgendaItemRepository.remove(familyMemberInAgendaItem);
  }
}
