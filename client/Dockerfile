FROM node:20.15.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm build

EXPOSE 3000

CMD ["yarn", "start"]
