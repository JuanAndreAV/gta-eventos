import {  IsDateString, IsEnum, IsNotEmpty, IsString, ValidateIf } from "class-validator";
export type TipoNovedad = 'cambio_horario' | 'incapacidad';
export type EstadoNovedad = 'pendiente' | 'aprobado' | 'rechazado';

export class CreateCambioHorarioDto {
    

    @IsString()
    @IsNotEmpty()
    nombreDocente: string;  

    @IsString()
    @IsNotEmpty()
    curso: string;

   @IsEnum( { cambio_horario: 'cambio_horario', incapacidad: 'incapacidad' } )
    tipoNovedad: TipoNovedad;

     @IsString()
    @IsNotEmpty()
    motivo: string;

    // Cambio de horario

    @ValidateIf(o => o.tipoNovedad === 'cambio_horario')
    @IsDateString()
    fechaOriginal?: string;

    @ValidateIf(o => o.tipoNovedad === 'cambio_horario')
    @IsDateString()
    nuevaFecha?: string;

     // Incapacidad

    @ValidateIf(o => o.tipoNovedad === 'incapacidad')
    @IsDateString()
    fechaInicioIncapacidad?: string;

    @ValidateIf(o => o.tipoNovedad === 'incapacidad')
    @IsDateString()
    fechaFinIncapacidad?: string;

    

   

}
export interface CreateNovedadPayload {
  nombreDocente: string;
  curso:         string;
  tipoNovedad:   TipoNovedad;
  motivo:        string;
 
  // Cambio de horario
  fechaOriginal?: string;
  nuevaFecha?:    string;
 
  // Incapacidad
  fechaInicioIncapacidad?: string;
  fechaFinIncapacidad?:    string;
  requiereReposicion?:     boolean;
  fechaReposicion?:        string;
}
 
export interface AtenderNovedadPayload {
  estado:            'aprobado' | 'rechazado';
  notaCoordinador?:  string;
}
 
export interface NovedadFiltros {
  estado?:        EstadoNovedad;
  tipoNovedad?:   TipoNovedad;
  nombreDocente?: string;
}

