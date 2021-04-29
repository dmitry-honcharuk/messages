import { eventsModel } from "./model";

class Service {
    async readEvents() {
        console.log('ZASHLO')
        const t = await eventsModel.find();
        console.log('t', t)
        return eventsModel.find();
    }
}

export default new Service();
