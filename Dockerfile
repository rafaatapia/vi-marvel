FROM node:16-alpine3.14

WORKDIR /app

COPY .env .
COPY package.json .

RUN npm install --production --quiet

COPY src src

RUN ls -l

CMD [ "npm", "run", "start" ]