import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioModule } from './modules//usuario/usuario.module';
import { ProductoModule } from './modules//producto/producto.module';
import { PedidoModule } from './modules//pedido/pedido.module';
import { CategoriaModule } from './modules//categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'tienda',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
    ProductoModule,
    PedidoModule,
    CategoriaModule,
  ],
})
export class AppModule {}
