import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AiModule } from './ai/ai.module';
import { CambioHorarioModule } from './cambio-horario/cambio-horario.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  ConfigModule,
   ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || "",{
  onConnectionCreate: (connection: Connection) => {
    connection.on('connected', () => console.log('connected'));
    connection.on('open', () => console.log('open'));
    connection.on('disconnected', () => console.log('disconnected'));
    connection.on('reconnected', () => console.log('reconnected'));
    connection.on('disconnecting', () => console.log('disconnecting'));

    return connection;
  },
}),
    
EventosModule,
    
AiModule,
    
CambioHorarioModule
],
  controllers: [],
  providers: [],
})
export class AppModule {
  
}
