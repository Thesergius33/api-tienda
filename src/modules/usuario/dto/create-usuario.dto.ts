import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;
}
