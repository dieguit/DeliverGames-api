FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --quiet
EXPOSE 3000
CMD [ "npm", "start" ]
