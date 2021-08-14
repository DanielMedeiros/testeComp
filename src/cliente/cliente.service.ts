import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { ClienteRepository } from './cliente.repository';
import { CreateClienteDTO } from './dto/create-cliente.dto';
import { GetNameClienteDto } from './dto/get-name-cliente.dto';

@Injectable()
export class ClienteService {
  private readonly logger = new Logger(ClienteService.name);

  constructor(
    @InjectRepository(ClienteRepository)
    private clienteRepository: ClienteRepository,
  ) {}

  async getClientes(): Promise<Cliente[]> {
    return await this.clienteRepository.getClientes();
  }

  async getClienteById(id: string): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne(id);

    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }
    return cliente;
  }

  async getClienteByName(
    getNameClienteDto: GetNameClienteDto,
  ): Promise<Cliente> {
    const { nome } = getNameClienteDto;
    const cliente = await this.clienteRepository.getClienteByName(
      getNameClienteDto,
    );

    if (!cliente) {
      throw new NotFoundException(`Cliente with ${nome} not found`);
    }
    return cliente;
  }

  async createCliente(createClienteDTO: CreateClienteDTO): Promise<Cliente> {
    try {
      return await this.clienteRepository.createCliente(createClienteDTO);
    } catch (error) {
      this.logger.error(`Failed to create client,  error ${error}`);
    }
  }

  async deleteCliente(id: string): Promise<void> {
    const cliente = this.getClienteById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }

    await this.clienteRepository.deleteCliente(id);
  }

  async updateClienteName(id: string, nome: string): Promise<Cliente> {
    const cliente = await this.getClienteById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }
    cliente.nome = nome;

    await this.clienteRepository.save(cliente);

    this.logger.log('Cliente updated...');
    return cliente;
  }
}
