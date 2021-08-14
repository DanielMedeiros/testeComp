import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cidade } from './cidade.entiy';
import { CidadeRepository } from './cidade.repository';
import { CreateCidadeDTO } from './dto/create-cidade.dto';
import { GetCidadeDTO } from './dto/get-cidade.dto';
import { GetCidadesByEstadoDTO } from './dto/get-cidades-by-estado.dto';

@Injectable()
export class CidadeService {
  private readonly logger = new Logger(CidadeService.name);

  constructor(
    @InjectRepository(CidadeRepository)
    private cidadeRepository: CidadeRepository,
  ) {}

  async getCidade(getCidadeDto: GetCidadeDTO): Promise<Cidade> {
    const { nome } = getCidadeDto;
    const cidade = await this.cidadeRepository.getCidade(getCidadeDto);

    if (!cidade) {
      throw new NotFoundException(`Cidade with ${nome} not found`);
    }
    return cidade;
  }

  async getCidadesByEstado(
    getCidadeByEstadoDto: GetCidadesByEstadoDTO,
  ): Promise<Cidade[]> {
    const { estado } = getCidadeByEstadoDto;
    const cidades = await this.cidadeRepository.getCidadesByEstado(
      getCidadeByEstadoDto,
    );

    if (!cidades) {
      throw new NotFoundException(
        `No cities were found for the state of ${estado}`,
      );
    }

    return cidades;
  }

  async createCidade(createCidadeDTO: CreateCidadeDTO): Promise<Cidade> {
    return await this.cidadeRepository.createCidade(createCidadeDTO);
  }
}
