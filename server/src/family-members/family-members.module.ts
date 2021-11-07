import { Module } from '@nestjs/common';
import { FamilyMembersService } from './family-members.service';
import { FamilyMembersResolver } from './family-members.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMember } from './entities/family-member.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([FamilyMember]), UsersModule],
  providers: [FamilyMembersService, FamilyMembersResolver],
  exports: [FamilyMembersService]
})
export class FamilyMembersModule {}
