FROM node:16.3.0-alpine

RUN mkdir /myapp

WORKDIR /myapp

RUN cd /myapp

COPY package.json .

RUN npm install

COPY . .

#ENV NODE_ENV=prod

EXPOSE 8001

CMD [ "npm", "run", "start-prd" ]