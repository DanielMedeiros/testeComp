import { Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Cidade } from './cidade.entiy';
import { CidadeService } from './cidade.service';
import { CreateCidadeDTO } from './dto/create-cidade.dto';
import { GetCidadeDTO } from './dto/get-cidade.dto';
import { GetCidadesByEstadoDTO } from './dto/get-cidades-by-estado.dto';

@Controller('/cidades')
export class CidadeController {
  constructor(private cidadeService: CidadeService) {}

  @Get()
  getCidade(@Body() getCidadeDto: GetCidadeDTO): Promise<Cidade> {
    return this.cidadeService.getCidade(getCidadeDto);
  }

  @Get('/estado')
  getCidadesByEstado(
    @Body() getCidadeByEstadoDto: GetCidadesByEstadoDTO,
  ): Promise<Cidade[]> {
    return this.cidadeService.getCidadesByEstado(getCidadeByEstadoDto);
  }

  @Post()
  createCliente(@Body() createCidadeDTO: CreateCidadeDTO): Promise<Cidade> {
    return this.cidadeService.createCidade(createCidadeDTO);
  }
}
