import express from 'express';

const app = express();

const PORT = +(process.env.PORT as string);
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port`);
});
