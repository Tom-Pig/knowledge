import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: +(process.env.PG_PORT ?? 5432),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      synchronize: process.env.PG_SYNCHRONIZE === 'true',
      logging: process.env.PG_LOGGING === 'true',
    }),
  ],
})
export class PostgresqlDatabaseModule {}
