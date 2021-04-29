import { EventModel } from './model';
import { Event } from './types';

class Service {
  async readEvents() {
    return EventModel.find();
  }

  async addEvent(event: Event) {
    return EventModel.create(event);
  }
}

export default new Service();
