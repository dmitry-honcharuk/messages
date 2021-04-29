import { Request, Response } from 'express';
import service from './service';

class Controller {
  async readEvents(req: Request, res: Response) {
    const events = await service.readEvents();

    return res.json(events);
  }
}

export default new Controller();
