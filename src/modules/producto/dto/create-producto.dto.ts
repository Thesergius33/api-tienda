import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsNotEmpty()
  categoriaId: number;
}
