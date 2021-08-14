import { ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteDTO } from './dto/create-cliente.dto';
import { GetNameClienteDto } from './dto/get-name-cliente.dto';
import { UpdateClienteNameDto } from './dto/update-name-cliente.dto';

@Controller('/clientes')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Get()
  getClientes(): Promise<Cliente[]> {
    return this.clienteService.getClientes();
  }

  @Get('/nome')
  getClienteByName(
    @Body() getNameClienteDto: GetNameClienteDto,
  ): Promise<Cliente> {
    return this.clienteService.getClienteByName(getNameClienteDto);
  }

  @Get('/:id')
  getClienteById(@Param('id') id: string): Promise<Cliente> {
    return this.clienteService.getClienteById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCliente(@Body() createClienteDTO: CreateClienteDTO): Promise<Cliente> {
    return this.clienteService.createCliente(createClienteDTO);
  }

  @Delete('/:id')
  deleteCliente(@Param('id') id: string): Promise<void> {
    return this.clienteService.deleteCliente(id);
  }

  @Patch('/:id/nome')
  @UsePipes(ValidationPipe)
  updateClienteName(
    @Param('id') id: string,
    @Body() updateClienteNameDto: UpdateClienteNameDto,
  ): Promise<Cliente> {
    const { nome } = updateClienteNameDto;
    return this.clienteService.updateClienteName(id, nome);
  }
}
