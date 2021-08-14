import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCidadeDTO {
  @ApiProperty({
    description: 'Nome do Cidade',
    example: 'Pelotas',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;
}
