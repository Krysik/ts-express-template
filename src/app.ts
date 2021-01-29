import express from 'express';
import setupMiddlewares from './middlewares';

const app = express();

setupMiddlewares(app);

const PORT = +(process.env.PORT as string) || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port`);
});
