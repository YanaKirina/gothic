import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      return await this.authService.register(registerDto.email, registerDto.password);
    } catch (error) {
      if (error.code === '23505') { // Код ошибки уникального ограничения в PostgreSQL
        throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Ошибка при регистрации', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login')
  async login(@Body() loginDto: RegisterDto) {
    try {
      return await this.authService.login(loginDto.email, loginDto.password);
    } catch (error) {
      throw new HttpException('Неверный email или пароль', HttpStatus.UNAUTHORIZED);
    }
  }
}
