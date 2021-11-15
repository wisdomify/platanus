# build stage
FROM node:lts-alpine as build-stage
WORKDIR /platanus
COPY package.json ./
RUN npm install --silent
COPY ./ .
RUN npm run build --quiet

# production stage
FROM nginx as production-stage
RUN mkdir /platanus
COPY --from=build-stage ./platanus/dist /platanus
COPY ./conf/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
