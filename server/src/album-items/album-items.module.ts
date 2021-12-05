import { Module } from '@nestjs/common';
import { AlbumItemsService } from './album-items.service';
import { AlbumItemsResolver } from './album-items.resolver';
import { AlbumItem } from './entities/album-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { FamilyMemberInAlbumItemsModule } from 'src/family-member-in-album-items/family-member-in-album-items.module';
import { FamilyRelationsModule } from 'src/family-relations/family-relations.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlbumItem]),
    FamilyMembersModule,
    FamilyMemberInAlbumItemsModule,
    FamilyRelationsModule  
  ],
  providers: [AlbumItemsResolver, AlbumItemsService],
  exports: [AlbumItemsService]
})
export class AlbumItemsModule {}
