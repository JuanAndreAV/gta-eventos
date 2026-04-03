import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type analysisResult = HydratedDocument<AiAnalysisResult>;

@Schema({ timestamps: true })
export class AiAnalysisResult {
    @Prop({required: true})
    analysis: string;

    @Prop({required: true})
    month: number;
    
    @Prop({required: true}) 
    year: number;


    @Prop({required: true, default: () => new Date()})
    createdAt: Date;
}

export const AiSchema = SchemaFactory.createForClass( AiAnalysisResult);
