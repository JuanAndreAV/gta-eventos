import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCambioHorarioDto } from './dto/create-cambio-horario.dto';
import { UpdateCambioHorarioDto } from './dto/update-cambio-horario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CambioHorario } from './entities/cambio-horario.entity';
import { Model } from 'mongoose';

@Injectable()
export class CambioHorarioService {
  constructor(
    @InjectModel(CambioHorario.name)
    private readonly cambioHorarioRepository: Model<CambioHorario>
  ){}

  async create(createCambioHorarioDto: CreateCambioHorarioDto) {
    if(createCambioHorarioDto){
      const cambioHorario = await this.cambioHorarioRepository.create(createCambioHorarioDto);
      return `Registro creado exitosamente: ${cambioHorario}`;
    }else{
      throw new Error('No se proporcionaron datos para crear el cambio de horario');
    }
    
  }

  async findAll() {
    return await this.cambioHorarioRepository.find();
  }

  findOne(id: number) {
    const cambioHorarioId = this.cambioHorarioRepository.findById(id);
    if (!cambioHorarioId) {
      throw new NotFoundException(`No se encontró ningún cambio de horario con el id: ${id}`);
    }
    return `This action returns a #${id} cambioHorario`;
  }

 

async update(id: string, updateCambioHorarioDto: UpdateCambioHorarioDto) {
    const novedad = await this.cambioHorarioRepository.findByIdAndUpdate(
      id,
      { $set: updateCambioHorarioDto },
      { new: true },           // devuelve el documento actualizado
    );
    if (!novedad) {
      throw new NotFoundException(`Novedad con id ${id} no encontrada`);
    }
    return novedad;
}

  async remove(id: string) {
    const resultado = await this.cambioHorarioRepository.findByIdAndDelete(id);;
    if (!resultado) {
      throw new NotFoundException(`No se encontró ningún cambio de horario con el id: ${id}`);
    }
    return `Registro con id ${id} eliminado exitosamente`;

  }
}
