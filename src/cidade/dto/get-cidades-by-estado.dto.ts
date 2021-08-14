import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCidadesByEstadoDTO {
  @ApiProperty({
    description: 'Nome do Estado',
    example: 'Rio Grande do Sul',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  estado: string;
}
