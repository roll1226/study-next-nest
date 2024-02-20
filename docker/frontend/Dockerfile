FROM node:18.17.0-alpine3.18
EXPOSE 80
WORKDIR /frontend

RUN apk update && \
  apk upgrade

CMD ["npm", "run", "dev"]
