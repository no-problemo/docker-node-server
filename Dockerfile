FROM ubuntu:14.04

RUN apt-get -y update
RUN apt-get -y install nodejs
RUN apt-get -y install npm

ADD . /src
RUN cd /src; npm install

EXPOSE  1337
CMD ["nodejs", "/src/index.js"]