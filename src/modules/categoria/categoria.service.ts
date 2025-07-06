import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private repo: Repository<Categoria>,
  ) {}

  create(dto: CreateCategoriaDto) {
    const categoria = this.repo.create(dto);
    return this.repo.save(categoria);
  }

  findAll() {
    return this.repo.find({ relations: ['productos'] });
  }

  async findOne(id: number) {
    const categoria = await this.repo.findOne({
      where: { id },
      relations: ['productos'],
    });
    if (!categoria) throw new NotFoundException('Categoría no encontrada');
    return categoria;
  }

  async update(id: number, dto: UpdateCategoriaDto) {
    const categoria = await this.findOne(id);
    Object.assign(categoria, dto);
    return this.repo.save(categoria);
  }

  async remove(id: number) {
    const categoria = await this.repo.findOne({
      where: { id },
      relations: ['productos'],
    });

    if (!categoria) {
      throw new NotFoundException('Categoría no encontrada');
    }

    // Elimina los productos relacionados
    if (categoria.productos && categoria.productos.length > 0) {
      await this.repo.manager.remove(categoria.productos);
    }

    await this.repo.remove(categoria);

    return { message: 'Categoría eliminada correctamente' };
  }
}
