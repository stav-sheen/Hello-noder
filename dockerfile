FROM node:latest

WORKDIR ./hello-node

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]
