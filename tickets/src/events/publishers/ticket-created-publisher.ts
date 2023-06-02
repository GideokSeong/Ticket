import { Publisher, Subjects, TicketCreatedEvent } from "@gdtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{

  readonly subject = Subjects.TicketCreated;

  
}
