import { Injectable } from '@nestjs/common';

@Injectable()
export class NewEndpointService {
  getHello(): string {
    return 'Hello World from new endpoint!';
  }
}
