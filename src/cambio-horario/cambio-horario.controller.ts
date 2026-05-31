import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { CambioHorarioService } from './cambio-horario.service';
import { CreateCambioHorarioDto } from './dto/create-cambio-horario.dto';
import { UpdateCambioHorarioDto } from './dto/update-cambio-horario.dto';

@Controller('cambio-horario')
export class CambioHorarioController {
  constructor(private readonly cambioHorarioService: CambioHorarioService) {}

  @Post()
  create(@Body() createCambioHorarioDto: CreateCambioHorarioDto) {
    return this.cambioHorarioService.create(createCambioHorarioDto);
  }

  @Get()
  async findAll() {
    return await this.cambioHorarioService.findAll();
  }
  @Get('estado/hoy')
  findByDate() {
    return this.cambioHorarioService.findByDate();
  }

  @Get('metricas')
async obtenerMetricas(@Query('mes') mes: string) {
  // Si no envían mes, por defecto toma el mes actual
  const mesNum =  mes ? parseInt(mes, 10) : new Date().getMonth() + 1;
  
  return this.cambioHorarioService.obtenerMetricasMensuales(mesNum);
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cambioHorarioService.findOne(id);
  }

  @Get('estado/:estado')
  async estado(@Param('estado') estado: string) {
    return await this.cambioHorarioService.estado(estado);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCambioHorarioDto: UpdateCambioHorarioDto) {
    return this.cambioHorarioService.update(id, updateCambioHorarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cambioHorarioService.remove(id);
  }


}
