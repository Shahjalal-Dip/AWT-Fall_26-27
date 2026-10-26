import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class CreateReviewDto {
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rating!: number;

  @IsString()
  @IsNotEmpty()
  comment!: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  userId!: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  buildingId!: number;
}
