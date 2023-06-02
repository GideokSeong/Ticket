import { Message } from 'node-nats-streaming';
import { Listener } from '../../../common/src/events/base-listener';
import { Subjects } from './subjects';
import { TicketCreatedEvent } from './ticket-created-event';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.Ticketcreated;
  queueGroupName = 'payments-service';
  
  onMessage(data: TicketCreatedEvent['data'], msg: Message){
    console.log('Even data!',data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);
    
    msg.ack();
  }
}