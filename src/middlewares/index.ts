import { Express } from 'express';
import logMiddleware from './log';

const setupMiddlewares = (app: Express) => {
  app.use(logMiddleware);
};

export default setupMiddlewares;
