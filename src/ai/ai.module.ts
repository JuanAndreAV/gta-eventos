import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AiAnalysisResult, AiSchema } from './entities/ai.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: AiAnalysisResult.name, schema: AiSchema }])],
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
