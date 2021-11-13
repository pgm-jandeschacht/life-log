import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMembersModule } from 'src/family-members/family-members.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    providers: [UsersResolver, UsersService],
    exports: [UsersService],
})
export class UsersModule {}
