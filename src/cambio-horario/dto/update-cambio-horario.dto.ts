import { PartialType } from '@nestjs/mapped-types';
import { CreateCambioHorarioDto } from './create-cambio-horario.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateCambioHorarioDto extends PartialType(CreateCambioHorarioDto) {
    @IsOptional()
    @IsEnum(['pendiente', 'aprobado', 'rechazado'])
    estado?: string;

    @IsString()
    @IsOptional()
    notaCoordinador?: string;
}
