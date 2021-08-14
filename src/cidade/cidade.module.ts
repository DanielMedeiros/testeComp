import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadeController } from './cidade.controller';
import { CidadeRepository } from './cidade.repository';
import { CidadeService } from './cidade.service';

@Module({
  imports: [TypeOrmModule.forFeature([CidadeRepository])],
  controllers: [CidadeController],
  providers: [CidadeService],
})
export class CidadeModule {}
