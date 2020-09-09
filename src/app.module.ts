import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewEndpointModule } from './new-endpoint/new-endpoint.module';

@Module({
  imports: [NewEndpointModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
