
FROM node:12

RUN mkdir -p /frontend

WORKDIR /frontend

COPY package*.json /frontend/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]