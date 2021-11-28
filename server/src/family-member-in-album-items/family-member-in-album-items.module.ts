import { Module } from '@nestjs/common';
import { FamilyMemberInAlbumItemsService } from './family-member-in-album-items.service';
import { FamilyMemberInAlbumItemsResolver } from './family-member-in-album-items.resolver';
import { FamilyMemberInAlbumItem } from './entities/family-member-in-album-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMembersModule } from 'src/family-members/family-members.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FamilyMemberInAlbumItem]),
    FamilyMembersModule,
  ],
  providers: [FamilyMemberInAlbumItemsResolver, FamilyMemberInAlbumItemsService],
  exports: [FamilyMemberInAlbumItemsService]
})
export class FamilyMemberInAlbumItemsModule {}
