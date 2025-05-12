import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';

config();

const baseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'database', // В Docker всегда используем имя сервиса
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'mydb',
  entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, '..', 'migrations', '*.{ts,js}')],
  migrationsTableName: 'migrations',
};

// Конфигурация для NestJS
export const typeOrmConfig: TypeOrmModuleOptions = {
  ...baseConfig,
  synchronize: false, // Отключаем автоматическую синхронизацию
  migrationsRun: true, // Включаем запуск миграций
} as TypeOrmModuleOptions;

// Конфигурация для миграций
export default new DataSource(baseConfig); 