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

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
