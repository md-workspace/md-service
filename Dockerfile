FROM node:16

WORKDIR /md-service

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/api/src/main"]