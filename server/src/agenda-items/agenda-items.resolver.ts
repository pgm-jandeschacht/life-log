import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { AgendaItemsService } from "./agenda-items.service";
import { AgendaItem } from "./entities/agenda-item.entity";
import { CreateAgendaItemInput } from "./dto/create-agenda-item.input";
import { UpdateAgendaItemInput } from "./dto/update-agenda-item.input";
import { FamilyMember } from "src/family-members/entities/family-member.entity";
import { FamilyMemberInAgendaItem } from "src/family-member-in-agenda-items/entities/family-member-in-agenda-item.entity";

@Resolver((of) => AgendaItem)
export class AgendaItemsResolver {
  constructor(
    private readonly agendaItemsService: AgendaItemsService
  ) {}

  @Mutation(() => AgendaItem)
  createAgendaItem(
    @Args("createAgendaItemInput") 
    createAgendaItemInput: CreateAgendaItemInput
  ) {
    return this.agendaItemsService.create(createAgendaItemInput);
  }

  @Query(() => [AgendaItem], { name: "agendaItems" })
  agendaItems() {
    return this.agendaItemsService.findAll();
  }

  @Query(() => AgendaItem, { name: "agendaItem" })
  agendaItemById(@Args("id", { type: () => Int }) id: number) {
    return this.agendaItemsService.findOneById(id);
  }

  @Query((returns) => [AgendaItem], { name: "agendaItemsByAuthor" })
  agendaItemsByAuthor(@Args("authorId", { type: () => Int }) authorId: number) {
    return this.agendaItemsService.findAllByAuthor(authorId);
  }

  @ResolveField((returns) => FamilyMember)
  author(@Parent() agendaItem: AgendaItem): Promise<FamilyMember> {
    return this.agendaItemsService.getAuthor(agendaItem.authorId);
  }

  @ResolveField((returns) => [FamilyMemberInAgendaItem ])
  inAgendaItem( @Parent() agendaItem: AgendaItem ): Promise<any> {
    return this.agendaItemsService.getInvitedFamilyMembers(agendaItem.id);
  }

  @Mutation(() => AgendaItem)
  updateAgendaItem(
    @Args("id", { type: () => Int }) 
    id: number,
    @Args("updateAgendaItemInput") 
    updateAgendaItemInput: UpdateAgendaItemInput
  ) {
    return this.agendaItemsService.update(id, updateAgendaItemInput);
  }

  @Mutation(() => AgendaItem)
  deleteAgendaItem(@Args("id", { type: () => Int }) id: number) {
    // return this.agendaItemsService.remove(id);
    const toBeDeletedAgendaItem = this.agendaItemsService.findOneById(id);
    if (toBeDeletedAgendaItem) {
      this.agendaItemsService.delete(id);
      return toBeDeletedAgendaItem;
    } else {
      return null;
    }
  }
}
