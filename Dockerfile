# Etapa 1: Construcción
FROM node:20-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# Copiar todo el código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servidor de producción con Nginx
FROM nginx:alpine

# Instalar gettext para envsubst (sustitución de variables)
RUN apk add --no-cache gettext

# Copiar la plantilla de configuración de Nginx
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar script de inicio y convertir line endings
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN sed -i 's/\r$//' /docker-entrypoint.sh && chmod +x /docker-entrypoint.sh

# Exponer el puerto (Railway lo asignará dinámicamente)
EXPOSE ${PORT:-80}

# Comando para iniciar con el script personalizado
CMD ["/docker-entrypoint.sh"]
