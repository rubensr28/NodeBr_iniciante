# Docker

## PostgreSQL

`docker ps` - ver processos rodando.

docker run
    --name postgres \
    -e POSTGRES_USER=rubens \
    -e POSTGRES_PASSWORD=Senha@123 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## MongoDB

docker run
    --name mongodb \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -p 27017:27017 \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -e MONGO_URL="mongodb://admin:admin@mongodb:27017/admin" \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo \
    --host localhost \
    -u admin \
    -p admin \
    --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'rubens', pwd: 'senha123', roles : [{role: 'readWrite', db: 'herois'}]})"
