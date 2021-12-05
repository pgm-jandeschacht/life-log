import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HelpPagesService } from './help-pages.service';
import { HelpPage } from './entities/help-page.entity';
import { CreateHelpPageInput } from './dto/create-help-page.input';
import { UpdateHelpPageInput } from './dto/update-help-page.input';

@Resolver(() => HelpPage)
export class HelpPagesResolver {
  constructor(
    private readonly helpPagesService: HelpPagesService
  ) {}

  @Mutation(() => HelpPage)
  createHelpPage(@Args('createHelpPageInput') createHelpPageInput: CreateHelpPageInput) {
    return this.helpPagesService.create(createHelpPageInput);
  }

  @Query(() => [HelpPage], { name: 'helpPages' })
  helpPages() {
    return this.helpPagesService.findAll();
  }

  @Query(() => HelpPage, { name: 'helpPage' })
  helpPageById(@Args('id', { type: () => Int }) id: number) {
    return this.helpPagesService.findOneById(id);
  }

  async helpPagesByPageName(@Args('pageName') pageName: string): Promise<HelpPage[]> {
    return this.helpPagesService.findPagesByPageName(pageName);
  }

  @Mutation(() => HelpPage)
  updateHelpPage(
    @Args('id', { type: () => Int }) 
    id: number,
    @Args('updateHelpPageInput') updateHelpPageInput: UpdateHelpPageInput
  ) {
    return this.helpPagesService.update(id, updateHelpPageInput);
  }

  @Mutation(() => HelpPage)
  removeHelpPage(@Args('id', { type: () => Int }) id: number) {
    const toBeDeletedHelpPage = this.helpPagesService.findOneById(id);
    if(toBeDeletedHelpPage) {
      this.helpPagesService.delete(id);
      return toBeDeletedHelpPage;
    } else {
      return null;
    }
  }
}
