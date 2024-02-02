FROM node:12-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
EXPOSE 3000

COPY . .

CMD ["npm", "run", "startBig"]