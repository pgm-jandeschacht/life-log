import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
    constructor(
        private configService: ConfigService
    ) {}

    createTypeOrmOptions() {
        if(process.env.NODE_ENV === 'prod') {
            // console.log('PRODUCTION')
            return this.configService.get('databaseProd');
        } else {
            // console.log('DEVELOPMENT');
            // console.log( this.configService.get('databaseTEST'))
            return this.configService.get('databaseTEST');
        }
    }
}