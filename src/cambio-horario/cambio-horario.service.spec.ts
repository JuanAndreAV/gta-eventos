import { Test, TestingModule } from '@nestjs/testing';
import { CambioHorarioService } from './cambio-horario.service';

describe('CambioHorarioService', () => {
  let service: CambioHorarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CambioHorarioService],
    }).compile();

    service = module.get<CambioHorarioService>(CambioHorarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
