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

@Module({
  imports: [
    GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: '',
        password: '',
        database: 'lifelog',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true
      }),
    FamilyMembersModule,
    NotesModule,
    AgendaItemsModule,
    AlbumItemsModule,
    WishListItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// Add middleware here
// for specific routes or specific controllers
export class AppModule {}
