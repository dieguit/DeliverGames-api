FROM node:alpine
WORKDIR /api

COPY package.json /api/package.json
RUN npm install
