import { Module } from '@nestjs/common';
import { LikedPicturesService } from './liked-pictures.service';
import { LikedPicturesResolver } from './liked-pictures.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikedPicture } from './entities/liked-picture.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { AlbumItem } from 'src/album-items/entities/album-item.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { AlbumItemsModule } from 'src/album-items/album-items.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LikedPicture]),
    FamilyMembersModule,
    AlbumItemsModule
  ],
  providers: [
    LikedPicturesResolver, 
    LikedPicturesService
  ]
})
export class LikedPicturesModule {}
