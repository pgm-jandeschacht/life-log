import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Seeder } from "nestjs-seeder";
import { FamilyMember } from "src/family-members/entities/family-member.entity";
import { Repository } from "typeorm";

@Injectable()
export class familyMemberSeeder implements Seeder {
    constructor(@InjectRepository(FamilyMember) private familyMemberRepository: Repository<FamilyMember>) {}
    
    async seed(): Promise<any> {

    }

    async drop(): Promise<any> {

    }
}