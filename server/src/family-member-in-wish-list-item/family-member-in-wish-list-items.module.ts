import { Module } from '@nestjs/common';
// import { FamilyMemberInWishListItemService } from './family-member-in-wish-list-item.service';
import { FamilyMemberInWishListItemsService } from './family-member-in-wish-list-items.service';

import { FamilyMemberInWishListItemsResolver } from './family-member-in-wish-list-items.resolver';
import { FamilyMemberInWishListItem } from './entities/family-members-in-wish-list-item.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';
import { WishListItemsModule } from 'src/wish-list-items/wish-list-items.module'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([FamilyMemberInWishListItem]),
        FamilyMembersModule,
        WishListItemsModule,   
    ],
  providers: [FamilyMemberInWishListItemsResolver, FamilyMemberInWishListItemsService]
})
export class FamilyMemberInWishListItemsModule {}
