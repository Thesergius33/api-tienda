import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del usuario a consultar',
    example: 1,
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un usuario por ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del usuario a actualizar',
    example: 4,
  })
  @ApiBody({
    type: UpdateUsuarioDto,
    description: 'Datos para actualizar el usuario',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario actualizado correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'ID inválido o datos incorrectos',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario por ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del usuario a eliminar',
    example: 2,
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.remove(id);
  }
}
