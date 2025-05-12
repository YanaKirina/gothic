#!/bin/bash

# Ожидание готовности базы данных
echo "Waiting for database..."
while ! nc -z database 5432; do
  sleep 0.1
done
echo "Database is ready!"

# Запуск приложения
if [ "$SERVICE_NAME" = "frontend" ]; then
  cd /app/frontend
  npm run dev
else
  cd /app/backend
  npm run start:dev
fi 