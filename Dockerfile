FROM node:argon

EXPOSE 80

RUN mkdir /usr/nodecolor
ADD . /usr/nodecolor
WORKDIR /usr/nodecolor

RUN npm install

ENTRYPOINT [ "node", "main.js" ]