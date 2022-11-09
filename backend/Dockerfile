FROM node:10-alpine

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY package.json ./

RUN npm i --silent

COPY . .

EXPOSE 4000

CMD npm start