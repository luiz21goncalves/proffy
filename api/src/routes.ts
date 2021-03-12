import { Router } from 'express';

import ClassController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = Router();
const classesController = new ClassController();
const connectionController = new ConnectionController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;
