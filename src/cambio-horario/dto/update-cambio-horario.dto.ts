import { PartialType } from '@nestjs/mapped-types';
import { CreateCambioHorarioDto } from './create-cambio-horario.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateCambioHorarioDto extends PartialType(CreateCambioHorarioDto) {
    @IsOptional()
    @IsEnum(['Pendiente', 'Aprobado', 'Rechazado'])
    estado?: string;

    @IsString()
    @IsOptional()
    notaCoordinador?: string;
}
