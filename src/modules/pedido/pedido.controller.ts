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
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('pedidos')
@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear pedido' })
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pedidos' })
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener pedido por ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del pedido',
    example: 1,
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pedidoService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar pedido' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del pedido',
    example: 1,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePedidoDto: UpdatePedidoDto,
  ) {
    return this.pedidoService.update(id, updatePedidoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar pedido' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID del pedido',
    example: 1,
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pedidoService.remove(id);
  }
}
