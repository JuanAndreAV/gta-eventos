import { Injectable } from '@nestjs/common';
import { CreateAiDto } from './dto/create-ai.dto';
import { UpdateAiDto } from './dto/update-ai.dto';
import { GoogleGenerativeAI } from '@google/generative-ai';


@Injectable()
export class AiService {

  private googleAi: GoogleGenerativeAI;
  private model: any;
  private apiKey = process.env.GEMINI_API_KEY || '';
  constructor() {
    this.googleAi = new GoogleGenerativeAI(this.apiKey);
    this.model = this.googleAi.getGenerativeModel({model:'gemini-2.5-pro'});
  }
  async analizarDatos(prompt: string) {
    try{
      const response = await this.model.generateContent(prompt);
      const respuesta = response.response;
      return respuesta.text();
    }
    catch(error){
      console.error('Error al analizar datos con Gemini:', error);
      throw new Error('Error al analizar datos');
    }
  }
  

  

}
