FROM node:20.15.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm rebuild bcrypt --build-from-source

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]