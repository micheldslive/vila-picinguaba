FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY . .

RUN yarn

RUN yarn build

EXPOSE 4000

CMD yarn start:prod