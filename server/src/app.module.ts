import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

// Database Imports
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { DatabaseConfig } from './database.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Custom Entities
import { AgendaItem } from './agenda-items/entities/agenda-item.entity';
import { AlbumItem } from './album-items/entities/album-item.entity';
import { FamilyMember } from './family-members/entities/family-member.entity';
import { FamilyMemberInAgendaItem } from './family-member-in-agenda-items/entities/family-member-in-agenda-item.entity';
import { FamilyMemberInAlbumItem } from './family-member-in-album-items/entities/family-member-in-album-item.entity';
import { FamilyMemberInWishListItem } from './family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';
import { FamilyRelation } from './family-relations/entities/family-relation.entity';
import { HelpPage } from './help-pages/entities/help-page.entity';
import { LikedPicture } from './liked-pictures/entities/liked-picture.entity';
import { Note } from './notes/entities/note.entity';
import { RelationType } from './relation-types/entities/relation-type.entity';
import { User } from './users/entities/user.entity';
import { WishListItem } from './wish-list-items/entities/wish-list-item.entity';

// Custom Modules
import { AuthModule } from './auth/auth.module';
import { AgendaItemsModule } from './agenda-items/agenda-items.module';
import { AlbumItemsModule } from './album-items/album-items.module';
import { FamilyMembersModule } from './family-members/family-members.module';
import { FamilyMemberInAgendaItemsModule } from './family-member-in-agenda-items/family-member-in-agenda-items.module';
import { FamilyMemberInAlbumItemsModule } from './family-member-in-album-items/family-member-in-album-items.module';
import { FamilyMemberInWishListItemsModule } from './family-member-in-wish-list-item/family-member-in-wish-list-items.module';
import { FamilyRelationsModule } from './family-relations/family-relations.module';
import { HelpPagesModule } from './help-pages/help-pages.module';
import { LikedPicturesModule } from './liked-pictures/liked-pictures.module';
import { NotesModule } from './notes/notes.module';
import { RelationTypesModule } from './relation-types/relation-types.module';
import { UsersModule } from './users/users.module';
import { WishListItemsModule } from './wish-list-items/wish-list-items.module';

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
      FamilyMemberInAgendaItem,
      LikedPicture,
      HelpPage
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
    LikedPicturesModule,
    HelpPagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
