import { Test, TestingModule } from '@nestjs/testing';
import { NewEndpointService } from './new-endpoint.service';

describe('NewEndpointService', () => {
  let service: NewEndpointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewEndpointService],
    }).compile();

    service = module.get<NewEndpointService>(NewEndpointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
