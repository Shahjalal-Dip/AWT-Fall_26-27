import { IsEmail, IsInt, IsString, Min, MinLength } from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  @MinLength(1)
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(1)
  phone!: string;

  @IsString()
  @MinLength(1)
  password!: string;

  @IsInt()
  @Min(1)
  age!: number;

  @IsInt()
  @Min(0)
  yearsOfWorking!: number;
}
