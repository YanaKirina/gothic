import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { AppController } from './app.controller';
import { getPostgresConfig } from './configs/postgres.config';
// import { ItemsController } from './items/items.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        getPostgresConfig(configService),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
})
export class AppModule {}
