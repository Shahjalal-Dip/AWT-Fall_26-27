import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Building } from "../building/entities/building.entity";
import { User } from "../user/entities/user.entity";
import { CreateReviewDto } from "./dto/create-review.dto";
import { Review } from "./entities/review.entity";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Building)
    private readonly buildingsRepository: Repository<Building>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const user = await this.usersRepository.findOneBy({
      id: createReviewDto.userId,
    });
    if (!user) {
      throw new NotFoundException(
        `User ${createReviewDto.userId} was not found`,
      );
    }

    const building = await this.buildingsRepository.findOneBy({
      id: createReviewDto.buildingId,
    });
    if (!building) {
      throw new NotFoundException(
        `Building ${createReviewDto.buildingId} was not found`,
      );
    }

    const review = this.reviewsRepository.create({
      rating: createReviewDto.rating,
      comment: createReviewDto.comment,
      user,
      building,
    });
    return this.reviewsRepository.save(review);
  }

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find({
      relations: { user: true, building: true },
    });
  }

  findOne(id: number): Promise<Review | null> {
    return this.reviewsRepository.findOne({
      where: { id },
      relations: { user: true, building: true },
    });
  }
}
