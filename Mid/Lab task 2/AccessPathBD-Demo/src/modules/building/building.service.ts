import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBuildingDto } from "./dto/create-building.dto";
import { Building } from "./entities/building.entity";

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private readonly buildingsRepository: Repository<Building>,
  ) {}

  create(createBuildingDto: CreateBuildingDto): Promise<Building> {
    return this.buildingsRepository.save(
      this.buildingsRepository.create(createBuildingDto),
    );
  }

  findAll(): Promise<Building[]> {
    return this.buildingsRepository.find();
  }

  findOne(id: number): Promise<Building | null> {
    return this.buildingsRepository.findOneBy({ id });
  }
}
