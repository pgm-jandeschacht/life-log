import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { Repository } from 'typeorm';
import { CreateAlbumItemInput } from './dto/create-album-item.input';
import { UpdateAlbumItemInput } from './dto/update-album-item.input';
import { AlbumItem } from './entities/album-item.entity';

@Injectable()
export class AlbumItemsService {
    constructor(
        @InjectRepository(AlbumItem) 
        private albumItemRepository: Repository<AlbumItem>, 
        private familyMemberService: FamilyMembersService) {};

    create(createAlbumItemInput: CreateAlbumItemInput): Promise<AlbumItem> {
        const newAlbumItem = this.albumItemRepository.create(createAlbumItemInput);
        
        return this.albumItemRepository.save(newAlbumItem);
    }

    findAll(): Promise<AlbumItem[]> {
        return this.albumItemRepository.find();
    }

    findOneById(id: number) {
        return this.albumItemRepository.findOneOrFail(id);
    }

    async update(id: number, updateAlbumItemInput: UpdateAlbumItemInput): Promise<AlbumItem> {
        return this.albumItemRepository.save({ id: id, ...updateAlbumItemInput })
    }

    async delete(id: number): Promise<AlbumItem> {
        const albumItem = await this.findOneById(id);

        return this.albumItemRepository.remove(albumItem);
    }

    getUploader(uploaderId: number): Promise<FamilyMember> {
        return this.familyMemberService.findOneById(uploaderId);
    }
}
