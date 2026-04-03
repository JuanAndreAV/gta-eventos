import { Injectable } from '@nestjs/common';
import { CreateAiDto } from './dto/create-ai.dto';
import { UpdateAiDto } from './dto/update-ai.dto';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { InjectModel } from '@nestjs/mongoose';
import { AiAnalysisResult } from './entities/ai.entity';
import { Model } from 'mongoose';


@Injectable()
export class AiService {

  private googleAi: GoogleGenerativeAI;
  private model: any;
  private apiKey = process.env.GEMINI_API_KEY || '';

  private date = new Date().toISOString().split("T")[0]; // Formato YYYY-MM-DD

  private promptAi = "Actúa como un Coordinador Estratégico de la Casa de la Cultura con experiencia en análisis de datos educativos.Tu objetivo es analizar el Reporte de Inasistencias adjunto y proporcionar un diagnóstico ejecutivo. Por favor, genera un informe con los siguientes 4 puntos:Análisis de Retención vs. Abandono, diagnóstico de género, foco en cursos críticos y una acción de impacto concreta para mejorar la situación actual. Fecha del reporte: " + this.date

  constructor(
    @InjectModel(AiAnalysisResult.name)
    private readonly aiAnalysisResult: Model<AiAnalysisResult>
  ) {
    this.googleAi = new GoogleGenerativeAI(this.apiKey);
    this.model = this.googleAi.getGenerativeModel({model:'gemini-2.5-pro'});
  }
  async analizarDatos(prompt: string) {
      const ahora = new Date()
      const date = ahora.toISOString().split("T")[0]; // Formato YYYY-MM-DD
      const promptAi = "Actúa como un Coordinador Estratégico de la Casa de la Cultura con experiencia en análisis de datos educativos.Tu objetivo es analizar el Reporte de Inasistencias adjunto y proporcionar un diagnóstico ejecutivo. Por favor, genera un informe con los siguientes 4 puntos:Análisis de Retención vs. Abandono, diagnóstico de género, foco en cursos críticos y una acción de impacto concreta para mejorar la situación actual. Fecha del reporte: " + this.date

    try{
      const response = await this.model.generateContent(
        `${this.promptAi}Datos: ${prompt} `
      );
      const respuesta = response.response.text();
      await this.saveAnalysisResult(respuesta, ahora.getMonth() + 1, ahora.getFullYear());
      return respuesta;
    }
    catch(error){
      console.error('Error al analizar datos con Gemini:', error);
      throw new Error('Error al analizar datos');
    }
  }

  async saveAnalysisResult(result: string, month: number, year: number) {
    const analusisResult = await this.aiAnalysisResult.create({
      analysis: result,
      month,
      year,
      createdAt: new Date(),
    });
    return analusisResult;
   
  }
  

  

}
