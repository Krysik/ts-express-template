FROM node:14.15-stretch-slim

WORKDIR /opt/app
COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

CMD [ "node", "dist/src/app.js" ]
