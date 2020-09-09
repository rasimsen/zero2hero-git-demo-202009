import { Controller, Get } from '@nestjs/common';
import { NewEndpointService } from './new-endpoint.service';

@Controller('new-endpoint')
export class NewEndpointController {
  constructor(private readonly service: NewEndpointService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
