import { Injectable } from '@nestjs/common';
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
    return `This action returns a #${id} cambioHorario`;
  }

  update(id: number, updateCambioHorarioDto: UpdateCambioHorarioDto) {
    return `This action updates a #${id} cambioHorario`;
  }

  remove(id: number) {
    return `This action removes a #${id} cambioHorario`;
  }
}
