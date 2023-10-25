#!/bin/sh

echo "Colima start...\n"
colima start
echo "\n"
echo "🚀 Inicializando serviço docker compose...\n"
docker compose up -d
