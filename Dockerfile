FROM node AS build

WORKDIR /app

RUN npm config set registry http://mirrors.cloud.tencent.com/npm/

CMD ["/bin/bash","-c","npm install && npm run build"]

#FROM nginx
#
#COPY --from=build /app/dist /usr/share/nginx/html
