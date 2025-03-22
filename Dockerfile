FROM node:20

WORKDIR /app

USER root

RUN apt-get update 

RUN chmod -R 777 /app
# RUN chmod 755 /app/scipts/development.sh