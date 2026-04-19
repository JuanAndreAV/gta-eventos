import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AiAnalysisResult, AiSchema } from './entities/ai.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: AiAnalysisResult.name, schema: AiSchema }]), AuthModule],
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
