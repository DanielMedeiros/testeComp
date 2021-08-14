import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  estado: string;
}
