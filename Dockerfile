FROM node:14.15-stretch-slim

WORKDIR /opt/app
COPY package*.json .

RUN npm run build

CMD [ "node", "dist/app.js" ]
