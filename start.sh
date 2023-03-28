#!/bin/bash

docker compose build
docker image prune -f
docker compose stop
docker compose up -d
