import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type CambioHorarioDocument = HydratedDocument<CambioHorario>;
@Schema()
export class CambioHorario  {
    @Prop({ required: true })
    nombreDocente: string;
    @Prop()
    curso: string;
    @Prop({ required: true })
    fechaOriginal: Date;
    @Prop({ required: true })
    nuevaFecha: Date;
    @Prop({ required: true })
    motivo: string;
    @Prop({required: true, enum: ['pendiente', 'aprobado', 'rechazado'], default: 'pendiente' })
    estado: string;
}
export const CambioHorarioSchema = SchemaFactory.createForClass(CambioHorario);
