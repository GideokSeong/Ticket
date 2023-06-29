import { Publisher, OrderCreatedEvent, Subjects } from "@gdtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
