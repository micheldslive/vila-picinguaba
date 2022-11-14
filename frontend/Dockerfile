FROM node:16-alpine

WORKDIR /picinguaba-web

COPY . .

RUN yarn

RUN yarn test

EXPOSE 4173

CMD ["yarn", "start"]