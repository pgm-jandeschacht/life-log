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
import { RelationTypesModule } from './relation-types/relation-types.module';
import { FamilyRelationsModule } from './family-relations/family-relations.module';
import { FamilyRelation } from './family-relations/entities/family-relation.entity';
import { FamilyMemberInAgendaItem } from './family-member-in-agenda-items/entities/family-member-in-agenda-item.entity';
import { FamilyMemberInAlbumItem } from './family-member-in-album-items/entities/family-member-in-album-item.entity';
import { FamilyMemberInWishListItem } from './family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';
import { RelationType } from './relation-types/entities/relation-type.entity';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { DatabaseConfig } from './database.config';
import { FamilyMemberInWishListItemsModule } from './family-member-in-wish-list-item/family-member-in-wish-list-items.module';
import { FamilyMemberInAgendaItemsModule } from './family-member-in-agenda-items/family-member-in-agenda-items.module';
import { FamilyMemberInAlbumItemsModule } from './family-member-in-album-items/family-member-in-album-items.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
        introspection: true,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [(ConfigModule)],
      useClass: DatabaseConfig
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forFeature(
    [
      FamilyMember, 
      User, 
      Note, 
      AgendaItem, 
      AlbumItem, 
      WishListItem, 
      FamilyRelation, 
      RelationType, 
      FamilyMemberInAlbumItem, 
      FamilyMemberInWishListItem, 
      FamilyMemberInAgendaItem
    ]),
    FamilyMembersModule,
    NotesModule,
    AgendaItemsModule,
    AlbumItemsModule,
    WishListItemsModule,
    UsersModule,
    AuthModule,
    RelationTypesModule,
    FamilyRelationsModule,
    FamilyMemberInWishListItemsModule,
    FamilyMemberInAgendaItemsModule,
    FamilyMemberInAlbumItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
