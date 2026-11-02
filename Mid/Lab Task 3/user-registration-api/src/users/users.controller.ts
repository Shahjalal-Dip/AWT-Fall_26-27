import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    // Validation is already done by ValidationPipe + DTO decorators.
    // The password is NOT returned.
    return {
      message: 'User registered successfully',
      user: {
        fullName: createUserDto.fullName,
        email: createUserDto.email,
        age: createUserDto.age,
        accountType: createUserDto.accountType,
      },
    };
  }
}