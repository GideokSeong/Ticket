import { Publisher, Subjects, OrderCancelledEvent } from "@gdtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
