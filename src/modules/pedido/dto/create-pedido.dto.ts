import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty({
    description: 'Descripción breve del pedido',
    example: 'Pedido para el cliente VIP',
  })
  @IsNotEmpty({ message: 'La descripción del pedido es obligatoria' })
  descripcion: string;

  @ApiProperty({
    description: 'ID del usuario que realiza el pedido',
    example: 1,
  })
  @IsNumber({}, { message: 'El ID del usuario debe ser un número' })
  @Type(() => Number)
  usuarioId: number;

  @ApiProperty({
    description: 'Lista de IDs de productos incluidos en el pedido',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsArray({ message: 'El campo productos debe ser un arreglo de números' })
  @ArrayNotEmpty({ message: 'Debes incluir al menos un producto en el pedido' })
  @Type(() => Number)
  productos: number[];

  @ApiProperty({
    description: 'Fecha del pedido en formato YYYY-MM-DD',
    example: '2025-07-06',
  })
  @IsDateString(
    {},
    { message: 'La fecha debe estar en formato válido YYYY-MM-DD' },
  )
  fecha: string;
}
