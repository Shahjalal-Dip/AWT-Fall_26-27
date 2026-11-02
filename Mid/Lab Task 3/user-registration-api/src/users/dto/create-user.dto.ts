import { Type } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'fullName must be at least 3 characters' })
  fullName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'email must be a valid email address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/, {
    message:
      'password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number and a special character',
  })
  password: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt({ message: 'age must be an integer' })
  @Min(18, { message: 'age must not be less than 18' })
  @Max(60, { message: 'age must not be greater than 60' })
  age: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^01[0-9]{9}$/, {
    message: 'phone must be exactly 11 digits and start with 01',
  })
  phone: string;

  @IsNotEmpty()
  @IsIn(['student', 'teacher'], {
    message: 'accountType must be either student or teacher',
  })
  accountType: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: 'address must be at least 10 characters' })
  address?: string;
}