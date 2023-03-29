#!/bin/sh

arg=$1

if [ "$arg" != "start" ] && [ "$arg" != "init" ] && [ "$arg" != "stop" ] && [ "$arg" != "up" ] && [ "$arg" != "restart" ];then
  echo "---------------------------------------------"
  echo "command [ init | start | stop | restart ]"
  echo "---------------------------------------------"
 fi


if [ "$arg" = "init" ];then
  docker compose build
  docker image prune -f
  docker compose stop
  docker compose up -d
  sleep 3 # mysql 还没启动来,给点等待时间
  docker exec -i kitchen-mysql sh -c 'exec mysql -uroot -p"k_kitchen_123456" -D kitchen' < ./conf/kitchen.sql
fi

if [ "$arg" = "start" ];then
  docker compose start
fi

if [ "$arg" = "stop" ];then
  docker compose stop
fi

if [ "$arg" = "up" ];then
   docker compose build
   docker image prune -f
   docker compose stop
   docker compose up -d
fi

if [ "$arg" = "restart" ];then
  docker compose stop
  docker compose start
fi
