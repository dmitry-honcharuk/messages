import { Request, Response } from 'express';
import service from './service';
import { Event } from './types';

class Controller {
  async readEvents(req: Request, res: Response) {
    const events = await service.readEvents();

    return res.json(events);
  }

  async addEvent(req: Request, res: Response) {
    const event: Event = req.body;

    if (!event.name) {
      return res.status(400).json({
        msg: 'теряйся',
      });
    }
    const result = await service.addEvent(event);

    return res.json(result);
  }
}

export default new Controller();
