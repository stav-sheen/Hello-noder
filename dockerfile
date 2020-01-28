FROM node:latest

WORKDIR ./hello-node

COPY ./hello-node .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]
