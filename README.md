# 📚 Plataforma Académica - Sistema de Gestión Estudiantil

Un proyecto moderno y responsivo construido con **Vite** y **React** que implementa una plataforma integral de gestión académica para estudiantes.

## 🎨 Características

- ✅ Interfaz moderna y intuitiva
- ✅ Diseño responsivo (Desktop, Tablet, Mobile)
- ✅ Componentes reutilizables
- ✅ Animaciones suaves
- ✅ Paleta de colores profesional
- ✅ Carga rápida con Vite

## 🚀 Comenzar

### Requisitos
- Node.js 16.0 o superior
- npm o yarn

### Instalación

```bash
# 1. Clonar o descargar el proyecto
cd plataforma-academica

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx
│   ├── MenuButton.jsx
│   └── StudentCard.jsx
├── pages/              # Páginas principales
│   └── InicioDesktop.jsx
├── styles/             # Estilos CSS de componentes
│   ├── Header.css
│   ├── MenuButton.css
│   ├── StudentCard.css
│   └── InicioDesktop.css
├── App.jsx             # Componente raíz
├── index.css           # Estilos globales
└── main.jsx            # Punto de entrada
```

## 🎯 Pantallas Implementadas

### Página 1: Inicio Desktop ✅
La página principal del estudiante con:
- Información del perfil del estudiante
- 9 botones de acceso rápido a funciones principales
- Navegación intuitiva
- Diseño responsivo

## 🔧 Componentes

### Header
Barra de navegación superior con:
- Logo de la institución
- Avatar del estudiante
- Iconos de acción

### MenuButton
Botón interactivo del menú con:
- Icono representativo
- Título descriptivo
- Efecto hover
- Navegación

### StudentCard
Tarjeta de información del estudiante con:
- Avatar circular
- Nombre del estudiante
- Código
- Estado

## 🎨 Paleta de Colores

```
Primary Blue: #00457A
Light Gray: #E3E3E3
Background: #E9E6E6
Light Background: #F4F4F4
```

## 🔤 Tipografía

- **Fuente Principal**: Mukta Mahee
- **Pesos**: 200, 300, 400, 500, 600, 700, 800
- Importada desde Google Fonts

## 📱 Responsividad

El proyecto está optimizado para:
- Desktop: 1920px y superiores
- Tablet: 1024px a 1920px
- Mobile: Menos de 1024px

## ✅ Pantallas Implementadas

- [x] Inicio/Dashboard
- [x] Calificaciones (con acordeones por materia y cortes)
- [x] Horario
- [x] Notificaciones
- [x] Ubicación de Salones
- [x] Materias y Profesores
- [x] Recursos Virtuales (con descarga de PDFs)
- [x] Gestión Administrativa (con descarga de documentos)
- [x] Perfil del Estudiante

## 🐳 Docker

### Ejecutar con Docker

```bash
# Construir la imagen
docker build -t plataforma-academica .

# Ejecutar el contenedor
docker run -d -p 3000:80 --name plataforma-academica plataforma-academica:latest

# Ver en: http://localhost:3000
```

Ver documentación completa en [DOCKER.md](DOCKER.md)

## 🚂 Desplegar en Railway

El proyecto está optimizado para Railway con despliegue en un click:

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login y desplegar
railway login
railway init
railway up
```

Ver guía completa en [RAILWAY.md](RAILWAY.md)

## 📄 Licencia

Este proyecto fue creado basándose en diseños de Figma.

## 👨‍💻 Autor

Desarrollado con ❤️ usando Vite + React

---

¿Preguntas o sugerencias? ¡Crea un issue o abre un pull request!
