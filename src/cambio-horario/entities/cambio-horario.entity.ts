import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CambioHorarioDocument = HydratedDocument<CambioHorario>;
export enum TipoNovedad {
    CAMBIO_HORARIO = 'cambio_horario',
    INCAPACIDAD = 'incapacidad'
}
export enum EstadoNovedad {
    PENDIENTE = 'pendiente',
    APROBADO = 'aprobado',
    RECHAZADO = 'rechazado'
}
@Schema({ timestamps: true })
export class CambioHorario  {
    @Prop({ required: true })
    nombreDocente: string;

    @Prop({ required: true })
    curso: string;

    @Prop({ required: true, enum: TipoNovedad })
    tipoNovedad: TipoNovedad;

    @Prop({ required: true })
    motivo: string;

    @Prop({required: true, enum: Object.values(EstadoNovedad), default: EstadoNovedad.PENDIENTE })
    estado: EstadoNovedad;

    @Prop()
    notaCoordinador?: string;

    @Prop()
    fechaOriginal?: Date;
    @Prop()
    nuevaFecha?: Date;

    //incapacidad 
    @Prop()
  fechaInicioIncapacidad?: Date;
 
  @Prop()
  fechaFinIncapacidad?: Date;
 
    
    
}
export const CambioHorarioSchema = SchemaFactory.createForClass(CambioHorario);
