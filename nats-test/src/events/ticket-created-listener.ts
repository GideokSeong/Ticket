import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import { Subjects } from './subjects';
import { TicketCreatedEvent } from './ticket-created-event';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.Ticketcreated = Subjects.Ticketcreated;
  queueGroupName = 'payments-service';
  
  onMessage(data: any, msg: Message){
    console.log('Even data!',data);

    console.log(data.name);
    console.log(data.cost);

    msg.ack();
  }
}