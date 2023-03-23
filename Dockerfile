FROM node

RUN npm config set registry http://mirrors.cloud.tencent.com/npm/

WORKDIR /app

CMD ["/bin/bash","-c","npm install"]

