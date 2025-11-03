# Docker - Plataforma Académica ECCI

Este documento explica cómo usar Docker para ejecutar la aplicación.

## Requisitos Previos

- Docker instalado (versión 20.10 o superior)
- Docker Desktop ejecutándose

## Construcción de la Imagen

```bash
# Navegar al directorio del proyecto
cd C:\Users\AngeloPC2\Documents\plataforma-academica

# Construir la imagen
docker build -t plataforma-academica:latest .
```

El proceso de build tomará varios minutos la primera vez. Docker:
1. Descargará las imágenes base (Node.js y Nginx)
2. Instalará las dependencias npm
3. Construirá la aplicación
4. Creará la imagen final optimizada

## Ejecución de la Aplicación

### Iniciar el contenedor

```bash
docker run -d -p 3000:80 --name plataforma-academica plataforma-academica:latest
```

La aplicación estará disponible en: **http://localhost:3000**

### Ver logs

```bash
docker logs plataforma-academica

# Ver logs en tiempo real
docker logs -f plataforma-academica
```

### Detener el contenedor

```bash
docker stop plataforma-academica
```

### Eliminar el contenedor

```bash
docker rm plataforma-academica
```

### Reiniciar el contenedor

```bash
docker restart plataforma-academica
```

## Comandos Útiles

### Ver contenedores en ejecución
```bash
docker ps
```

### Ver todos los contenedores (incluidos detenidos)
```bash
docker ps -a
```

### Entrar al contenedor (shell)
```bash
docker exec -it plataforma-academica sh
```

### Ver información del contenedor
```bash
docker inspect plataforma-academica
```

### Ver uso de recursos
```bash
docker stats plataforma-academica
```

## Gestión de Imágenes

### Listar imágenes
```bash
docker images
```

### Eliminar la imagen
```bash
docker rmi plataforma-academica:latest
```

### Limpiar imágenes sin usar
```bash
docker image prune -a
```

## Estructura de Archivos Docker

```
├── Dockerfile              # Dockerfile multi-stage para producción
├── nginx.conf.template     # Plantilla de configuración de Nginx (con variable PORT)
├── docker-entrypoint.sh    # Script de inicio con configuración dinámica
├── .dockerignore          # Archivos excluidos del build
├── .gitattributes         # Configuración de line endings para scripts
└── DOCKER.md              # Esta documentación
```

## Detalles Técnicos

### Multi-stage Build

El Dockerfile usa dos etapas:

**Etapa 1 - Builder (Node.js Alpine)**
- Instala dependencias
- Construye la aplicación React/Vite
- Genera archivos estáticos en `/app/dist`

**Etapa 2 - Producción (Nginx Alpine)**
- Copia solo los archivos construidos
- Configura Nginx como servidor web
- Imagen final optimizada (~50-60MB)

### Características de Nginx

- **Compresión gzip**: Reduce el tamaño de transferencia
- **Cache de assets**: Archivos estáticos cacheados por 1 año
- **React Router**: Todas las rutas redirigen a index.html
- **Headers de seguridad**: X-Frame-Options, X-Content-Type-Options, etc.
- **Puerto dinámico**: Compatible con Railway y otros servicios cloud que asignan puertos dinámicamente
- **Health check**: Endpoint `/health` para monitoreo

## Cambiar el Puerto

Si el puerto 3000 está ocupado, usa otro puerto:

```bash
# Usar puerto 8080 en lugar de 3000
docker run -d -p 8080:80 --name plataforma-academica plataforma-academica:latest
```

La aplicación estará en: http://localhost:8080

## Probar Configuración de Railway Localmente

Para simular cómo funcionará en Railway (con puerto dinámico):

```bash
# Ejecutar con PORT variable (simula Railway)
docker run -d -p 3000:8080 -e PORT=8080 --name plataforma-academica plataforma-academica:latest

# Verificar que está escuchando en el puerto correcto
docker logs plataforma-academica | grep "Configured to listen"

# Probar health check
curl http://localhost:3000/health
```

## Actualizar la Aplicación

Cuando hagas cambios en el código:

```bash
# 1. Detener y eliminar el contenedor actual
docker stop plataforma-academica
docker rm plataforma-academica

# 2. Reconstruir la imagen
docker build -t plataforma-academica:latest .

# 3. Ejecutar el nuevo contenedor
docker run -d -p 3000:80 --name plataforma-academica plataforma-academica:latest
```

## Solución de Problemas

### Error: "Cannot connect to Docker daemon"
**Solución**: Inicia Docker Desktop desde el menú de Windows y espera a que esté completamente iniciado.

### Error: "Port is already allocated"
**Solución**: El puerto 3000 está en uso. Detén el contenedor existente o usa otro puerto:
```bash
docker stop plataforma-academica
# o
docker run -d -p 8080:80 --name plataforma-academica plataforma-academica:latest
```

### El contenedor no inicia
```bash
# Ver logs detallados
docker logs plataforma-academica

# Verificar estado
docker ps -a
```

### Reconstruir desde cero
```bash
# Eliminar contenedor
docker rm -f plataforma-academica

# Eliminar imagen
docker rmi plataforma-academica:latest

# Construir sin cache
docker build --no-cache -t plataforma-academica:latest .
```

### Error: "exec /docker-entrypoint.sh: no such file or directory"
**Causa**: Problema con line endings de Windows (CRLF vs LF).
**Solución**: El Dockerfile automáticamente convierte los line endings durante el build usando `sed`. Si modificas el script `docker-entrypoint.sh`, asegúrate de que el archivo `.gitattributes` esté presente para mantener los line endings correctos.

## Limpieza del Sistema

### Eliminar todo lo relacionado con el proyecto
```bash
# Detener y eliminar contenedor
docker stop plataforma-academica
docker rm plataforma-academica

# Eliminar imagen
docker rmi plataforma-academica:latest
```

### Limpieza completa de Docker
```bash
# Eliminar contenedores detenidos
docker container prune -f

# Eliminar imágenes sin usar
docker image prune -a -f

# Limpieza completa del sistema
docker system prune -a --volumes -f
```

## Despliegue en Producción

### Subir a Docker Hub

```bash
# 1. Autenticarse
docker login

# 2. Etiquetar la imagen
docker tag plataforma-academica:latest tu-usuario/plataforma-academica:latest

# 3. Subir la imagen
docker push tu-usuario/plataforma-academica:latest
```

### Desplegar en un servidor

```bash
# En el servidor remoto
docker pull tu-usuario/plataforma-academica:latest
docker run -d -p 80:80 --name plataforma tu-usuario/plataforma-academica:latest
```

## Variables de Entorno

Si necesitas configurar variables de entorno:

```bash
docker run -d \
  -p 3000:80 \
  -e VITE_API_URL=https://api.example.com \
  --name plataforma-academica \
  plataforma-academica:latest
```

## Verificación de la Instalación

Para verificar que todo está funcionando correctamente:

```bash
# 1. Verificar que Docker está instalado
docker --version

# 2. Verificar que la imagen se construyó
docker images | grep plataforma-academica

# 3. Verificar que el contenedor está corriendo
docker ps | grep plataforma-academica

# 4. Verificar que responde
curl http://localhost:3000
```

## Notas Importantes

- La primera construcción puede tardar 5-10 minutos
- El tamaño final de la imagen es aproximadamente 50-60MB
- Se recomienda tener al menos 2GB de RAM disponible
- Los archivos en `public/` se incluyen en el build final
- El puerto interno de Nginx es 80, mapeado a 3000 (o el que elijas)
