# base image
FROM node:14.20.0
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV PORT 4200
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@15.2.1
COPY . /app

EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0 --disable-host-check
