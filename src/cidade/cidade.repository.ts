import { EntityRepository, Repository } from 'typeorm';
import { Cidade } from './cidade.entiy';
import { CreateCidadeDTO } from './dto/create-cidade.dto';
import { GetCidadeDTO } from './dto/get-cidade.dto';
import { GetCidadesByEstadoDTO } from './dto/get-cidades-by-estado.dto';

@EntityRepository(Cidade)
export class CidadeRepository extends Repository<Cidade> {
  async getCidade(getCidadeDto: GetCidadeDTO): Promise<Cidade> {
    const { nome } = getCidadeDto;
    const query = this.createQueryBuilder('cidade');
    if (nome) {
      query.andWhere('cidade.nome LIKE :nome', { nome: `%${nome}%` });
    }

    const cidade = await query.getRawOne();

    return cidade;
  }

  async getCidadesByEstado(
    getCidadeByEstadoDto: GetCidadesByEstadoDTO,
  ): Promise<Cidade[]> {
    const { estado } = getCidadeByEstadoDto;
    const query = this.createQueryBuilder('cidade');
    if (estado) {
      query.andWhere('cidade.estado = :estado', { estado });
    }

    const cidades = await query.getMany();

    return cidades;
  }

  async createCidade(createCidadeDTO: CreateCidadeDTO): Promise<Cidade> {
    const { nome, estado } = createCidadeDTO;

    const cidade = this.create({
      nome,
      estado,
    });

    await this.save(cidade);

    return cidade;
  }
}
