import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import logMiddleware from './log';
import * as swaggerDocument from '../../swagger.json';

const setupMiddlewares = (app: Express) => {
  app.use(logMiddleware);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupMiddlewares;
