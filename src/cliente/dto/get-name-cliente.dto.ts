import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetNameClienteDto {
  @ApiProperty({
    description: 'Nome do Cliente',
    example: 'Joao da Silva',
    type: 'string',
  })
  @IsString()
  nome: string;
}
