import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePedidoDto {
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  descripcion: string;

  @IsNumber(
    {},
    { message: 'El ID del usuario es obligatorio y debe ser un número' },
  )
  @Type(() => Number)
  usuarioId: number;

  @IsArray({ message: 'Productos debe ser un arreglo' })
  @ArrayNotEmpty({ message: 'Debes incluir al menos un producto' })
  @Type(() => Number)
  productos: number[];

  @IsDateString({}, { message: 'La fecha debe estar en formato YYYY-MM-DD' })
  fecha: string;
}
