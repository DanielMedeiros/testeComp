import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  sexo: string;

  @Column()
  dataNascimento: string;

  @Column()
  idade: number;

  @Column()
  cidadeResidente: string;
}
