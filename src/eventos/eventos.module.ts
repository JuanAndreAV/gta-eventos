import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Evento, EventSchema } from './entities/evento.entity';

@Module({
  controllers: [EventosController],
  imports: [
    MongooseModule.forFeature([{
      name: Evento.name,
      schema: EventSchema
    }])
  ],
  providers: [EventosService],
})
export class EventosModule {}
