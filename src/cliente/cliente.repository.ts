import { EntityRepository, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDTO } from './dto/create-cliente.dto';
import { GetNameClienteDto } from './dto/get-name-cliente.dto';

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {
  async getClientes(): Promise<Cliente[]> {
    const query = this.createQueryBuilder('cliente');

    const clientes = await query.getMany();

    return clientes;
  }

  async getClienteByName(
    getNameClienteDto: GetNameClienteDto,
  ): Promise<Cliente> {
    const { nome } = getNameClienteDto;
    const query = this.createQueryBuilder('cliente');
    if (nome) {
      query.andWhere('cliente.nome LIKE :nome', { nome: `%${nome}%` });
    }

    const clientes = await query.getRawOne();

    return clientes;
  }

  async createCliente(createClienteDTO: CreateClienteDTO): Promise<Cliente> {
    const { nome, sexo, idade, dataNascimento, cidadeResidente } =
      createClienteDTO;

    const cliente = this.create({
      nome,
      sexo,
      dataNascimento,
      idade,
      cidadeResidente,
    });

    await this.save(cliente);

    return cliente;
  }

  async deleteCliente(id: string): Promise<void> {
    await this.delete(id);
  }
}
