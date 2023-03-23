FROM node as node_build


WORKDIR /app

COPY ./app /app

RUN npm config set registry http://mirrors.cloud.tencent.com/npm/ && \
    npm install && \
    npm run build \

FROM nginx

COPY --from=node_build /app/dist /usr/share/nginx/html
