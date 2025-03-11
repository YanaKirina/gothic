import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController], // <-- Добавляем контроллер
  providers: [UsersService], // <-- Добавляем сервис
  exports: [UsersService],
})
export class UsersModule {}
