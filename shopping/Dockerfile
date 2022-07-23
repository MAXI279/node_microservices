FROM node:16.3.0-alpine

RUN mkdir /myapp

WORKDIR /myapp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8003

CMD [ "npm", "run", "start-prd" ]