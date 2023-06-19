import { Publisher, Subjects, TicketUpdatedEvent } from "@gdtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{

  readonly subject = Subjects.TicketUpdated;

}
