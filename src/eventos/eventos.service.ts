import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Model } from 'mongoose';
import { Evento } from './entities/evento.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EventosService {
  constructor(
    @InjectModel(Evento.name)
    private readonly eventoRepository: Model<Evento>) {}
  async create(createEventoDto: CreateEventoDto) {
     const createEvent = await this.eventoRepository.create(createEventoDto);
    return createEvent
  }

  async findAll() {
    const eventos = await this.eventoRepository.find().exec();
    return eventos;
  }

  async findOne(fecha: Date) {
    if(fecha){
      const evento = await this.eventoRepository.findOne({ fecha }).exec();
      if(evento){
        return evento;
      }else{
        throw new Error(`No se encontró ningún evento con la fecha original: ${fecha}`);
      }
    }
  }
//añadir hora en la entidad y en el dto para poder buscar por fecha y hora
  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
