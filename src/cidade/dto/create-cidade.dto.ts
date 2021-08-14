import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCidadeDTO {
  @ApiProperty({
    description: 'Nome do Cidade',
    example: 'Pelotas',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Nome do Estado',
    example: 'Rio Grande do Sul',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  estado: string;
}
