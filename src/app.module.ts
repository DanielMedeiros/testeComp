import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { CidadeModule } from './cidade/cidade.module';
import { Cliente } from './cliente/cliente.entity';
import { Cidade } from './cidade/cidade.entiy';

@Module({
  imports: [
    ClienteModule,
    CidadeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'teste',
      entities: [Cliente, Cidade],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
