FROM robzhu/nodejs

EXPOSE 3000

RUN mkdir /usr/nodecolor
ADD . /usr/nodecolor
WORKDIR /usr/nodecolor

RUN npm install

ENTRYPOINT [ "node", "main.js" ]