import {
  IsOptional,
  IsNotEmpty,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePedidoDto {
  @IsOptional()
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  descripcion?: string;

  @IsOptional()
  @IsNumber({}, { message: 'El ID del usuario debe ser un número' })
  @Type(() => Number)
  usuarioId?: number;

  @IsOptional()
  @IsArray({ message: 'Productos debe ser un arreglo' })
  @ArrayNotEmpty({ message: 'Debes incluir al menos un producto' })
  @Type(() => Number)
  productos?: number[];

  @IsOptional()
  @IsDateString({}, { message: 'La fecha debe estar en formato YYYY-MM-DD' })
  fecha?: string;
}
