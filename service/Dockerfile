FROM golang:1.20.2-alpine AS build

WORKDIR /app
COPY   ./ /app
RUN go env -w GOPROXY=https://goproxy.cn \
    && go mod tidy \
    && go build -o kitchen-server .

FROM alpine:3.17.2

WORKDIR /root
COPY --from=build /app/kitchen-server /root/

EXPOSE 8080

CMD ["/bin/sh","-c","./kitchen-server"]
