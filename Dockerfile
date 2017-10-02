FROM node:alpine
WORKDIR /app

RUN npm install nodemon -g
RUN npm install swagger-markdown -g

COPY package.json /app/package.json
RUN npm install

CMD ["npm", "start"]
