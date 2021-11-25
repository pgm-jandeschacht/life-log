import { Module } from '@nestjs/common';
// import { FamilyMemberInAlbumItemsService } from './family-member-in-album-items.service';
import { FamilyMemberInAlbumItemsService } from './family-member-in-album-items.service';
import { FamilyMemberInAlbumItemsResolver } from './family-member-in-album-items.resolver';
import { FamilyMemberInAlbumItem } from './entities/family-member-in-album-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { AlbumItemsModule } from 'src/album-items/album-items.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([FamilyMemberInAlbumItem]),
        FamilyMembersModule,
        AlbumItemsModule
    ],
  providers: [FamilyMemberInAlbumItemsResolver, FamilyMemberInAlbumItemsService]
})
export class FamilyMemberInAlbumItemsModule {}
