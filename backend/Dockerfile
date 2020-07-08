# version de node
FROM node:12

RUN mkdir -p /usr/src/app

# directorio de la app
WORKDIR /usr/src/app

# copiar los (.json) ej: package.json
COPY package*.json ./

# para que instale (todo con npm)
RUN npm install

# copiar todos los archivos del proyecto
COPY . .

#puerto por default
EXPOSE 4000

#npm
CMD [ "npm", "start" ]