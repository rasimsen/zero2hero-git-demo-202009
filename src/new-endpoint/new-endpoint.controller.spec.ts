import { Test, TestingModule } from '@nestjs/testing';
import { NewEndpointController } from './new-endpoint.controller';

describe('NewEndpoint Controller', () => {
  let controller: NewEndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewEndpointController],
    }).compile();

    controller = module.get<NewEndpointController>(NewEndpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
