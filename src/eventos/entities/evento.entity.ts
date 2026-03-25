import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EventoDocument = HydratedDocument<Evento>;
@Schema()
export class Evento {
    @Prop({ required: true, unique: true })
    nombre: string;
    @Prop({ required: true })
    fecha: Date;
    @Prop({ required: true })
    lugar: string;  
    @Prop()
    descripcion: string;
    @Prop({ default: false })
    inscripcion: boolean;
}
export const EventSchema = SchemaFactory.createForClass(Evento)
