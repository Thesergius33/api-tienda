import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @OneToMany(() => Pedido, (pedido) => pedido.usuario)
  pedidos: Pedido[];
}
