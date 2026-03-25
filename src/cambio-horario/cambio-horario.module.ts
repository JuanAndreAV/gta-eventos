import { Module } from '@nestjs/common';
import { CambioHorarioService } from './cambio-horario.service';
import { CambioHorarioController } from './cambio-horario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CambioHorario, CambioHorarioSchema } from './entities/cambio-horario.entity';

@Module({
  controllers: [CambioHorarioController],
  providers: [CambioHorarioService],
  imports: [
    MongooseModule.forFeature([{ name: CambioHorario.name, schema:  CambioHorarioSchema}])]
  
})
export class CambioHorarioModule {}
