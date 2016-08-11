FROM node:argon

ENV PORT 80
EXPOSE 80

WORKDIR /app
RUN mkdir -p /app
ADD package.json /app
RUN npm install
ADD . /app

ENTRYPOINT [ "node", "main.js" ]