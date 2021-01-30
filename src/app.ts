import express from 'express';
import setupMiddlewares from './middlewares';

const app = express();

setupMiddlewares(app);

app.get('/test', (req, res) => res.status(200).json('hello'));

const PORT = +(process.env.PORT as string) || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port`);
});

export default server;
