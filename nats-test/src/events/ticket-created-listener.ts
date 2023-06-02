import { Message } from 'node-nats-streaming';
import { Listener } from '../../../tickets/node_modules/@gdtickets/common';
import { Subjects } from '../../../tickets/node_modules/@gdtickets/common';
import { TicketCreatedEvent } from '../../../tickets/node_modules/@gdtickets/common';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'payments-service';
  
  onMessage(data: TicketCreatedEvent['data'], msg: Message){
    console.log('Even data!',data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);
    
    msg.ack();
  }
}