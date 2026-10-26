import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CreateBuildingDto } from "./dto/create-building.dto";
import { BuildingService } from "./building.service";

@Controller("buildings")
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  create(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingService.create(createBuildingDto);
  }

  @Get()
  findAll() {
    return this.buildingService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const building = await this.buildingService.findOne(id);
    if (!building) {
      throw new NotFoundException(`Building ${id} was not found`);
    }
    return building;
  }
}
