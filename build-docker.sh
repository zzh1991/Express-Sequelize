#!/bin/bash
rm -rf ./docker/app
cp -R ./app package.json ./docker

# DATE=$(date "+%Y%m%d.%H%M")
DATE=$(date "+%Y%m%d.0000")

echo ${DATE}

cd docker

docker rmi express-sequelize:${DATE}

docker build -t express-sequelize:${DATE} .

docker rmi $(docker images -f "dangling=true" -q)
