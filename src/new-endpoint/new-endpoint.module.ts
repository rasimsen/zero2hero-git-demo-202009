import { Module } from '@nestjs/common';
import { NewEndpointController } from './new-endpoint.controller';
import { NewEndpointService } from './new-endpoint.service';

@Module({
  controllers: [NewEndpointController],
  providers: [NewEndpointService]
})
export class NewEndpointModule {}
