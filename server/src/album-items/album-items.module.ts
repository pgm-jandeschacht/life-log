import { Module } from '@nestjs/common';
import { AlbumItemsService } from './album-items.service';
import { AlbumItemsResolver } from './album-items.resolver';
import { AlbumItem } from './entities/album-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMembersModule } from 'src/family-members/family-members.module';

@Module({
    imports: [TypeOrmModule.forFeature([AlbumItem]),
    FamilyMembersModule],
  providers: [AlbumItemsResolver, AlbumItemsService]
})
export class AlbumItemsModule {}
