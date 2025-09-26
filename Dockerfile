FROM node:latest

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

RUN apt-get update && apt-get install -y git


COPY backend/. .

EXPOSE 6001

CMD ["npm", "start"]