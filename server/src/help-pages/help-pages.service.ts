import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpPageInput } from './dto/create-help-page.input';
import { UpdateHelpPageInput } from './dto/update-help-page.input';
import { HelpPage } from './entities/help-page.entity';

@Injectable()
export class HelpPagesService {
  constructor(
    @InjectRepository(HelpPage)
    private helpPageRepository: Repository<HelpPage>
  ) {};

  async create(createHelpPageInput: CreateHelpPageInput): Promise<HelpPage> {
    const newHelpPage = await this.helpPageRepository.create(createHelpPageInput);

    return this.helpPageRepository.save(newHelpPage);
  }

  findAll(): Promise<HelpPage[]> {
    return this.helpPageRepository.find();
  }

  findOneById(id: number) {
    return this.helpPageRepository.findOneOrFail(id);
  }

  findPagesByPageName(pageName: string): Promise<HelpPage[]> {
    return this.helpPageRepository.find({ 
      where: { 
        page: pageName 
      } 
    });
  }

  async update(id: number, updateHelpPageInput: UpdateHelpPageInput): Promise<HelpPage> {
    return this.helpPageRepository.save({
      id: id,
      ...updateHelpPageInput
    })
  }

  async delete(id: number): Promise<HelpPage> {
    const helpPage = await this.findOneById(id);
    return this.helpPageRepository.remove(helpPage);
  }
}
