import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Categoria } from '../categoria/categoria.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly repo: Repository<Producto>,
    @InjectRepository(Categoria)
    private readonly categoriaRepo: Repository<Categoria>,
  ) {}

  async create(dto: CreateProductoDto) {
    const categoria = await this.categoriaRepo.findOneBy({
      id: dto.categoriaId,
    });
    if (!categoria) throw new NotFoundException('Categoría no encontrada');
    const producto = this.repo.create({ ...dto, categoria });
    return this.repo.save(producto);
  }

  findAll() {
    return this.repo.find({ relations: ['categoria'] });
  }

  async findOne(id: number) {
    const prod = await this.repo.findOne({
      where: { id },
      relations: ['categoria'],
    });
    if (!prod) throw new NotFoundException('Producto no encontrado');
    return prod;
  }

  async update(id: number, dto: UpdateProductoDto) {
    const producto = await this.findOne(id);

    if (dto.categoriaId) {
      const categoria = await this.categoriaRepo.findOneBy({
        id: dto.categoriaId,
      });
      if (!categoria) throw new NotFoundException('Categoría no encontrada');
      producto.categoria = categoria;
    }

    // ✅ Forma segura con cast
    if (dto.nombre !== undefined) {
      producto.nombre = dto.nombre;
    }

    if (dto.precio !== undefined) {
      producto.precio = dto.precio;
    }

    return this.repo.save(producto);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.repo.remove(producto);
  }
}
