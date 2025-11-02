# Despliegue en Railway - Plataforma Académica ECCI

Esta guía te ayudará a desplegar la aplicación en Railway.

## 🚀 Despliegue Rápido

### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/plataforma-academica.git
   git push -u origin main
   ```

2. **Despliega en Railway**
   - Ve a [railway.app](https://railway.app)
   - Click en "Start a New Project"
   - Selecciona "Deploy from GitHub repo"
   - Autoriza Railway a acceder a tus repositorios
   - Selecciona el repositorio `plataforma-academica`
   - Railway detectará automáticamente el Dockerfile y comenzará el despliegue

3. **Configurar dominio**
   - Una vez desplegado, ve a Settings → Networking
   - Click en "Generate Domain"
   - Tu app estará disponible en: `https://tu-app.up.railway.app`

### Opción 2: Desde Railway CLI

1. **Instalar Railway CLI**
   ```bash
   # Windows (PowerShell)
   iwr https://railway.app/install.ps1 | iex

   # macOS/Linux
   sh -c "$(curl -fsSL https://railway.app/install.sh)"
   ```

2. **Autenticar**
   ```bash
   railway login
   ```

3. **Inicializar proyecto**
   ```bash
   cd C:\Users\AngeloPC2\Documents\plataforma-academica
   railway init
   ```

4. **Desplegar**
   ```bash
   railway up
   ```

5. **Abrir en el navegador**
   ```bash
   railway open
   ```

## 📋 Requisitos Previos

- Cuenta en [Railway](https://railway.app)
- Repositorio Git (GitHub, GitLab, o Bitbucket)
- El código debe estar en un repositorio remoto

## 🔧 Configuración

### Archivos de Configuración Railway

El proyecto ya incluye todos los archivos necesarios:

```
├── Dockerfile                  # Build optimizado para Railway
├── docker-entrypoint.sh        # Script de inicio con puerto dinámico
├── nginx.conf.template         # Configuración de Nginx con variable PORT
├── railway.json                # Configuración de Railway
└── .railwayignore             # Archivos excluidos del deploy
```

### Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno:

1. Ve a tu proyecto en Railway
2. Click en "Variables"
3. Agrega las variables necesarias:
   ```
   NODE_ENV=production
   VITE_API_URL=https://tu-api.com
   ```

## 🌐 Características del Despliegue

### Puerto Dinámico
Railway asigna un puerto automáticamente mediante la variable `$PORT`. El proyecto está configurado para detectar y usar este puerto automáticamente.

### Health Check
El proyecto incluye un endpoint `/health` para monitoreo:
```bash
curl https://tu-app.up.railway.app/health
# Respuesta: healthy
```

### SSL/HTTPS Automático
Railway proporciona SSL/HTTPS automáticamente para todos los dominios generados.

### Build Multi-stage
El Dockerfile usa build multi-stage para:
- Reducir el tamaño de la imagen (~60MB)
- Optimizar el tiempo de despliegue
- Mejorar la seguridad

## 📊 Monitoreo

### Ver Logs en Tiempo Real

**Desde el Dashboard:**
1. Ve a tu proyecto en Railway
2. Click en la pestaña "Deployments"
3. Selecciona el deployment activo
4. Los logs aparecerán automáticamente

**Desde CLI:**
```bash
railway logs
```

### Métricas
Railway proporciona métricas automáticas de:
- CPU usage
- Memory usage
- Network traffic
- Request count

Accede a ellas desde: Project → Metrics

## 🔄 Actualizaciones

### Despliegue Automático (CI/CD)

Railway detecta automáticamente cambios en tu repositorio:

1. Haz cambios en tu código
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Actualización"
   git push
   ```
3. Railway detectará el push y desplegará automáticamente

### Despliegue Manual

```bash
# Desde la carpeta del proyecto
railway up

# O forzar un nuevo despliegue
railway redeploy
```

## 🛠️ Comandos Útiles

### Railway CLI

```bash
# Ver estado del proyecto
railway status

# Ver logs
railway logs

# Abrir en el navegador
railway open

# Ver variables de entorno
railway variables

# Ejecutar comando en el contenedor
railway run <comando>

# Conectar con la base de datos (si tienes una)
railway connect

# Eliminar proyecto
railway delete
```

## 🔐 Dominio Personalizado

### Agregar Dominio Propio

1. Ve a Settings → Networking
2. Click en "Custom Domain"
3. Ingresa tu dominio: `plataforma.tudominio.com`
4. Configura los DNS en tu proveedor:
   ```
   Type: CNAME
   Name: plataforma
   Value: tu-app.up.railway.app
   ```
5. Espera la propagación DNS (5-30 minutos)

Railway configurará SSL automáticamente con Let's Encrypt.

## 💰 Costos

Railway ofrece:
- **$5 de crédito gratis al mes** para hobby projects
- **Pago por uso** después del crédito
- Aproximadamente **$0.000231 per GB-hour**

### Estimar Costos

Para una aplicación como esta:
- Imagen: ~60MB
- RAM estimada: ~100MB en ejecución
- Costo mensual estimado: **$1-3 USD** (con tráfico bajo/medio)

## ⚡ Optimizaciones

### Build Cache
Railway cachea las capas de Docker:
- Primera vez: 2-5 minutos
- Siguientes: 30-60 segundos (si no hay cambios en dependencias)

### Reducir Tiempo de Build

Si cambias solo código (no package.json):
```bash
# El build reutilizará la capa de node_modules
# Solo reconstruirá el código nuevo
```

## 🐛 Solución de Problemas

### Build Falla

**Ver logs detallados:**
```bash
railway logs --deployment
```

**Limpiar cache y rebuild:**
1. Ve a Settings → Deployments
2. Click en "Redeploy" con "Clear Cache"

### App no responde

**Verificar logs:**
```bash
railway logs
```

**Verificar health check:**
```bash
curl https://tu-app.up.railway.app/health
```

### Puerto Incorrecto

Si ves errores de puerto, verifica que:
- `docker-entrypoint.sh` esté presente
- Tenga permisos de ejecución
- La variable `$PORT` se esté leyendo correctamente

### Reconstruir desde cero

```bash
# Eliminar el proyecto
railway delete

# Crear nuevo proyecto
railway init

# Desplegar
railway up
```

## 📱 Entornos Múltiples

### Crear entorno de staging

1. Ve a tu proyecto en Railway
2. Click en "New Environment"
3. Nombra el entorno: `staging`
4. Despliega una rama diferente:
   ```bash
   railway environment staging
   railway up
   ```

### Separar producción y desarrollo

```bash
# Desarrollo
railway environment development
railway up

# Producción
railway environment production
railway up
```

## 🔗 Enlaces Útiles

- [Documentación Railway](https://docs.railway.app)
- [Railway CLI](https://docs.railway.app/develop/cli)
- [Railway Status](https://status.railway.app)
- [Pricing Calculator](https://railway.app/pricing)
- [Discord Community](https://discord.gg/railway)

## 🎯 Checklist de Despliegue

Antes de desplegar, verifica:

- [ ] Código subido a GitHub/GitLab
- [ ] Dockerfile presente y probado localmente
- [ ] Variables de entorno configuradas (si aplica)
- [ ] `.railwayignore` presente
- [ ] `railway.json` configurado
- [ ] Dominio personalizado configurado (opcional)
- [ ] Health check funcionando
- [ ] Build local exitoso con Docker

## 🚀 Siguiente Paso

1. **Despliega ahora:**
   ```bash
   railway login
   railway init
   railway up
   ```

2. **Obtén tu URL:**
   ```bash
   railway open
   ```

3. **Comparte tu aplicación:**
   Tu app estará en: `https://plataforma-academica.up.railway.app`

---

## 📞 Soporte

Si encuentras problemas:
1. Revisa los logs: `railway logs`
2. Consulta la [documentación](https://docs.railway.app)
3. Únete al [Discord de Railway](https://discord.gg/railway)
4. Abre un issue en GitHub

¡Tu Plataforma Académica ECCI está lista para el mundo! 🎓🚀
