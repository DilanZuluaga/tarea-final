#!/bin/sh

# Script de inicio para Railway
# Configura Nginx con el puerto dinámico asignado por Railway

set -e

# Railway asigna el puerto dinámicamente, usar 80 como fallback
export PORT=${PORT:-80}

echo "Starting Plataforma Académica ECCI..."
echo "Configured to listen on port: $PORT"

# Procesar la plantilla de nginx con envsubst
envsubst '${PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

# Verificar la configuración de Nginx
nginx -t

# Iniciar Nginx
exec nginx -g "daemon off;"
