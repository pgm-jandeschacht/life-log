import { Module } from '@nestjs/common';
import { FamilyMemberInWishListItemsService } from './family-member-in-wish-list-items.service';
import { FamilyMemberInWishListItemsResolver } from './family-member-in-wish-list-items.resolver';
import { FamilyMemberInWishListItem } from './entities/family-members-in-wish-list-item.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forFeature([FamilyMemberInWishListItem]),
      FamilyMembersModule,
  ],
  providers: [FamilyMemberInWishListItemsResolver, FamilyMemberInWishListItemsService],
  exports: [FamilyMemberInWishListItemsService]
})
export class FamilyMemberInWishListItemsModule {}
