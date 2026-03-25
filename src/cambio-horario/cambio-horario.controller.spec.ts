import { Test, TestingModule } from '@nestjs/testing';
import { CambioHorarioController } from './cambio-horario.controller';
import { CambioHorarioService } from './cambio-horario.service';

describe('CambioHorarioController', () => {
  let controller: CambioHorarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CambioHorarioController],
      providers: [CambioHorarioService],
    }).compile();

    controller = module.get<CambioHorarioController>(CambioHorarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
