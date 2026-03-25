import { PartialType } from '@nestjs/mapped-types';
import { CreateCambioHorarioDto } from './create-cambio-horario.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateCambioHorarioDto extends PartialType(CreateCambioHorarioDto) {
    @IsOptional()
    @IsEnum(['Pendiente', 'Aprobado', 'Rechazado'])
    estado?: string;
}
