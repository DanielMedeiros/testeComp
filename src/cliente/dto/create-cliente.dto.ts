import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDTO {
  @ApiProperty({
    description: 'Nome do Cliente',
    example: 'Joao da Silva',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Sexo do Cliente',
    example: 'Masculino',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  sexo: string;

  @ApiProperty({
    description: 'Data de nascimento do Cliente',
    example: '10-10-2010',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  dataNascimento: string;

  @ApiProperty({
    description: 'Idade do Cliente',
    example: '25',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  idade: number;

  @ApiProperty({
    description: 'Cidade onde o Cliente reside',
    example: 'Pelotas',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  cidadeResidente: string;
}
