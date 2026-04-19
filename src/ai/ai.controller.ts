import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AiService } from './ai.service';
import { CreateAiDto } from './dto/create-ai.dto';
import { UpdateAiDto } from './dto/update-ai.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('prompts')
  @UseGuards(AuthGuard('jwt'))
  message(@Body('prompt') prompt: string) {
    return this.aiService.analizarDatos(prompt);
    /*return {
      message: `Prompt recibido: ${prompt}`,
      analysis: `Resultado de análisis para el prompt: ${prompt}`
    }*/
  }

 /* @Post('analysis')
  saveAnalysisResult(@Body('result') result: string) {
    return this.aiService.saveAnalysisResult(result);
  }*/

    @Get()
    @UseGuards(AuthGuard('jwt'))
    saludo(@Request() req){
        return `Hola ${req.user.email}, tu rol es ${req.user.role}`;
    }

}


