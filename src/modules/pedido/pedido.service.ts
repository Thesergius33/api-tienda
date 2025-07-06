import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Pedido } from './pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../producto/producto.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private repo: Repository<Pedido>,
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(dto: CreatePedidoDto) {
    const usuario = await this.usuarioRepo.findOneBy({ id: dto.usuarioId });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const productos = await this.productoRepo.find({
      where: { id: In(dto.productos) },
    });
    if (!productos.length)
      throw new NotFoundException('Productos no encontrados');

    const pedido = this.repo.create({
      fecha: new Date(dto.fecha),
      descripcion: dto.descripcion,
      usuario,
      productos,
    });

    return this.repo.save(pedido);
  }

  findAll() {
    return this.repo.find({ relations: ['usuario', 'productos'] });
  }

  async findOne(id: number) {
    const pedido = await this.repo.findOne({
      where: { id },
      relations: ['usuario', 'productos'],
    });
    if (!pedido) throw new NotFoundException('Pedido no encontrado');
    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto) {
    const pedido = await this.findOne(id);

    if (dto.usuarioId) {
      const usuario = await this.usuarioRepo.findOneBy({ id: dto.usuarioId });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      pedido.usuario = usuario;
    }

    if (dto.productos && dto.productos.length > 0) {
      const productos = await this.productoRepo.find({
        where: { id: In(dto.productos) },
      });

      if (!productos.length)
        throw new NotFoundException('Productos no encontrados');
      pedido.productos = productos;
    }

    if (dto.fecha !== undefined) pedido.fecha = new Date(dto.fecha);
    if (dto.descripcion !== undefined) pedido.descripcion = dto.descripcion;

    return this.repo.save(pedido);
  }

  async remove(id: number) {
    const pedido = await this.findOne(id);
    return this.repo.remove(pedido);
  }
}
