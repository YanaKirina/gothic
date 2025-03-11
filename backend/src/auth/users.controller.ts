import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger'; // <-- Добавляем Swagger
import { UsersService } from './users.service';

@ApiTags('Users') // <-- Группируем в Swagger
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'password123' },
      },
      required: ['email', 'password'],
    },
  })
  register(@Body() body: { email: string; password: string }) {
    return this.usersService.register(body.email, body.password);
  }

  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'password123' },
      },
      required: ['email', 'password'],
    },
  })
  login(@Body() body: { email: string; password: string }) {
    return this.usersService.login(body.email, body.password);
  }
}
