FROM node:alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --only=prod
COPY . .

CMD ["node", "index.js"]
