import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductoDto {
  @ApiProperty({
    example: 'Camiseta Roja',
    description: 'Nombre del producto',
  })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @ApiProperty({
    example: 50000,
    description: 'Precio del producto',
  })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @Type(() => Number)
  @Min(0, { message: 'El precio no puede ser negativo' })
  precio: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la categoría a la que pertenece el producto',
  })
  @IsNumber({}, { message: 'El ID de la categoría debe ser un número' })
  @Type(() => Number)
  categoriaId: number;
}
