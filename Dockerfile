FROM node:alpine
WORKDIR /api

RUN npm install nodemon -g
RUN npm install swagger-markdown -g

COPY package.json /api/package.json
RUN npm install

CMD ["npm", "start"]
