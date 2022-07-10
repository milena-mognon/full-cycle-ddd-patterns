import { EventInterface } from '../event.interface';

/**
 * Todos os eventos devem implementar EventInterface
 */
export class CustomerCreatedEvent implements EventInterface {
  dataTimeOcurred: Date;
  eventDate: any;

  constructor(eventData: any) {
    this.dataTimeOcurred = new Date();
    this.eventDate = eventData;
  }
}
