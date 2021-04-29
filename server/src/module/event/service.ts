import { EventModel } from './model';

class Service {
  async readEvents() {
    return EventModel.find();
  }
}

export default new Service();
