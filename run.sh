#!/bin/sh

## it needs java 11 to be set
cd backend
./gradlew clean
./gradlew build -x test
cd ..
docker-compose up --build -d

echo "===================================="
echo "App running => http://localhost:9090"
echo "===================================="