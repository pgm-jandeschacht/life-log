import { Module } from '@nestjs/common';
import { WishListItemsService } from './wish-list-items.service';
import { WishListItemsResolver } from './wish-list-items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishListItem } from './entities/wish-list-item.entity';
import { FamilyMembersModule } from 'src/family-members/family-members.module';

@Module({
    imports: [TypeOrmModule.forFeature([WishListItem]), FamilyMembersModule],
    providers: [WishListItemsResolver, WishListItemsService]
})
export class WishListItemsModule {}
