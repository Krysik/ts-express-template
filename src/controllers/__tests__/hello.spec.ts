import { Server } from 'http';
import request from 'supertest';
import server from '../../app';

let app: Server;

beforeAll(() => {
  app = server;
});

afterAll(() => {
  app.close();
});

it('should works', (done) => {
  request(app).get('/test').expect(200, done);
});
