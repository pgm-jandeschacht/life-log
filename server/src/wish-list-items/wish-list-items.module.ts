import { Module } from '@nestjs/common';
import { WishListItemsService } from './wish-list-items.service';
import { WishListItemsResolver } from './wish-list-items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishListItem } from './entities/wish-list-item.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { FamilyMemberInWishListItemsModule } from 'src/family-member-in-wish-list-item/family-member-in-wish-list-items.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WishListItem]), 
    FamilyMembersModule,
    FamilyMemberInWishListItemsModule
  ],
  providers: [WishListItemsResolver, WishListItemsService],
  exports: [WishListItemsService],
})
export class WishListItemsModule {}
