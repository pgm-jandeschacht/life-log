import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyMemberInAgendaItemsService } from './family-member-in-agenda-items.service';
import { FamilyMemberInAgendaItem } from './entities/family-member-in-agenda-item.entity';
import { CreateFamilyMemberInAgendaItemInput } from './dto/create-family-member-in-agenda-item.input';
import { UpdateFamilyMemberInAgendaItemInput } from './dto/update-family-member-in-agenda-item.input';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';

@Resolver(() => FamilyMemberInAgendaItem)
export class FamilyMemberInAgendaItemsResolver {
  constructor(private readonly FamilyMemberInAgendaItemsService: FamilyMemberInAgendaItemsService) {}

  @Mutation(() => FamilyMemberInAgendaItem)
  createFamilyMemberInAgendaItem(@Args('createFamilyMemberInAgendaItemInput') createFamilyMemberInAgendaItemInput: CreateFamilyMemberInAgendaItemInput) {
    return this.FamilyMemberInAgendaItemsService.create(createFamilyMemberInAgendaItemInput);
  }

  @Query(() => [FamilyMemberInAgendaItem], { name: 'FamilyMemberInAgendaItems' })
  findAll() {
    return this.FamilyMemberInAgendaItemsService.findAll();
  }

  @Query(() => FamilyMemberInAgendaItem, { name: 'FamilyMemberInAgendaItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.FamilyMemberInAgendaItemsService.findOne(id);
  }

//   @Query(() [FamilyMember], { name: 'FamilyMembers involved in Agenda Item'})
// findFamilyMembersInvolvedInAgendaItem(@Args('id', { type: () => Int }) id: number) {

//   @Mutation(() => FamilyMemberInAgendaItem)
//   updateFamilyMemberInAgendaItem(@Args('updateFamilyMemberInAgendaItemInput') updateFamilyMemberInAgendaItemInput: UpdateFamilyMemberInAgendaItemInput) {
//     return this.FamilyMemberInAgendaItemsService.update(updateFamilyMemberInAgendaItemInput.id, updateFamilyMemberInAgendaItemInput);
//   }

  @Mutation(() => FamilyMemberInAgendaItem)
  removeFamilyMemberInAgendaItem(@Args('id', { type: () => Int }) id: number) {
    return this.FamilyMemberInAgendaItemsService.remove(id);
  }
}
