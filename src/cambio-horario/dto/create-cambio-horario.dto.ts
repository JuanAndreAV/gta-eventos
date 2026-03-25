import {  IsDateString, IsString } from "class-validator";

export class CreateCambioHorarioDto {
    @IsString()
    nombreDocente: string;
    @IsString()
    curso: string;
    @IsDateString()
    fechaOriginal: Date;
    @IsDateString()
    nuevaFecha: Date;
    @IsString()
    motivo: string;
    
}

