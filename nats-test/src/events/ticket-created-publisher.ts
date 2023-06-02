import { Publisher } from '../../../tickets/node_modules/@gdtickets/common';
import { TicketCreatedEvent } from '../../../tickets/node_modules/@gdtickets/common';
import { Subjects } from '../../../tickets/node_modules/@gdtickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  
  readonly subject = Subjects.TicketCreated;
  
  
}