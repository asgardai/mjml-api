FROM node:8-alpine

COPY . /mjml-api
WORKDIR /mjml-api

RUN yarn install && \
    yarn cache clean

CMD yarn start