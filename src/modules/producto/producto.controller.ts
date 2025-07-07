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
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('productos')
@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear producto' })
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos' })
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener producto por ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
    description: 'ID del producto',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar producto' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
    description: 'ID del producto',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productoService.update(id, updateProductoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar producto' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
    description: 'ID del producto',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.remove(id);
  }
}
