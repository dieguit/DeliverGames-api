FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
