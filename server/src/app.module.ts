import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {FamilyMembersModule } from './family-members/family-members.module';
import { join } from 'path';
import { NotesModule } from './notes/notes.module';
import { AgendaItemsModule } from './agenda-items/agenda-items.module';
import { AlbumItemsModule } from './album-items/album-items.module';
import { WishListItemsModule } from './wish-list-items/wish-list-items.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FamilyMember } from './family-members/entities/family-member.entity';
import { User } from './users/entities/user.entity';
import { Note } from './notes/entities/note.entity';
import { AgendaItem } from './agenda-items/entities/agenda-item.entity';
import { AlbumItem } from './album-items/entities/album-item.entity';
import { WishListItem } from './wish-list-items/entities/wish-list-item.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Fvh89cxn',
        database: 'lifelog',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        // logging: true
      }),
      TypeOrmModule.forFeature([FamilyMember, User, Note, AgendaItem, AlbumItem, WishListItem]),
    FamilyMembersModule,
    NotesModule,
    AgendaItemsModule,
    AlbumItemsModule,
    WishListItemsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// Add middleware here
// for specific routes or specific controllers
export class AppModule {}
