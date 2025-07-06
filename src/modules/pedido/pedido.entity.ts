import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../producto/producto.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidos, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ManyToMany(() => Producto)
  @JoinTable()
  productos: Producto[];
}
