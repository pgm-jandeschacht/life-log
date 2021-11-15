import { Module } from '@nestjs/common';
import { RelationTypesService } from './relation-types.service';
import { RelationTypesResolver } from './relation-types.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationType } from './entities/relation-type.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([RelationType])
    ],
    providers: [RelationTypesResolver, RelationTypesService],
    exports: [RelationTypesService]
})
export class RelationTypesModule {}
