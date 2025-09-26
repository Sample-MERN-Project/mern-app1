FROM node:latest

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

COPY backend/. .

EXPOSE 6001

CMD ["npm", "start"]