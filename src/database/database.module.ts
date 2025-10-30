import { Module } from '@nestjs/common';
import { Postgresql } from './postgresql';

@Module({
  imports: [Postgresql],
})
export class DatabaseModule {}
