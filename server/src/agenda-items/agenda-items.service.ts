import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateAgendaItemInput } from './dto/create-agenda-item.input';
import { UpdateAgendaItemInput } from './dto/update-agenda-item.input';
import { AgendaItem } from './entities/agenda-item.entity';

@Injectable()
export class AgendaItemsService {
    constructor(@InjectRepository(AgendaItem) private agendaItemRepository: Repository<AgendaItem>, private familyMemberService: FamilyMembersService) {};

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

    // getInvitedFamilyMembers(id: number) {
    //     return this.agendaItemRepository
    //     .createQueryBuilder('familyMember')
    //     .leftJoinAndSelect('employee.invitedAgendaItems', 'invitedAgendaItems')
    //     .leftJoinAndSelect()
    // }
    
    async update(id: number, updateAgendaItemInput: UpdateAgendaItemInput): Promise<AgendaItem> {
        return this.agendaItemRepository.save({id: id, ...updateAgendaItemInput});
    }

    async delete(id: number): Promise<AgendaItem> {
        const note = await this.findOneById(id);

        return this.agendaItemRepository.remove(note);
    }

    getAuthor(authorId: number) : Promise<FamilyMember> {
        console.log('AUTHOR ID in service', authorId);
        return this.familyMemberService.findOneById(authorId);
    }

    // iedere ker is het "een agenda item"
    // AgendaItem {
    //     id: 3,
    //     title: 'Unde ut dolor quam et consequuntur voluptatem qui quo rem.',
    //     authorId: 1,
    //     createdOn: 2020-12-25T04:10:12.246Z,
    //     updatedOn: null,
    //     date: 2022-01-22T17:34:04.373Z,
    //     inAgendaItem: [
    //       FamilyMemberInAgendaItem {
    //         id: 1,
    //         familyMemberId: 9,
    //         agendaItemId: 3
    //       },
    //       FamilyMemberInAgendaItem {
    //         id: 3,
    //         familyMemberId: 5,
    //         agendaItemId: 3
    //       }
    //     ]
    async getInvitedFamilyMembers(agendaItem: AgendaItem) : Promise<any> {
        // console.log('--------------');
        // console.log(agendaItem.inAgendaItem);
        if(agendaItem.inAgendaItem.length > 0) {
            return agendaItem.inAgendaItem.map(familyMember => {
                // console.log('familyMemberId::', familyMember.familyMemberId);
                // console.log( this.familyMemberService.findOneById(familyMember.familyMemberId));
                return this.familyMemberService.findOneById(familyMember.familyMemberId);
            });
        } else return null
        // console.log('AUTHOR ID in service', authorId);
        // return this.familyMemberService.findOneById(authorId);
    }

    findAllByAuthor(authorId: number): Promise<AgendaItem[]> {
        return this.agendaItemRepository.find({
            where: {
                authorId: authorId
            }
        });
    }

    // getInvitedFamilyMembers(id: number): Promise<FamilyMember[] | any[]> {
    //     const famMembers = this.agendaItemRepository.find({
    //         where: {
    //             id: id
    //         },
    //         relations: ['with']
    //     })
            
        
    //         console.log(famMembers);
    //         return famMembers;
    //         // .createQueryBuilder('agendaItem')
    //         // .leftJoinAndSelect( 'agendaItem.with','familyMember')
    //         // .getMany();
        
    //         // console.log(famMembers);
    //         // return famMembers;

    // }

    // getMembers(agendaItemIt: number) : Promise<FamilyMember> {
    //     return this.familyMemberService.findAll({where : {}})
    // }

    // getInvitedFamilyMembers(): Promise<FamilyMember[]> {

    // }

}
