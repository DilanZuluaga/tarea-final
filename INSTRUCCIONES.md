# 🎓 Plataforma Académica - Instrucciones

## ¡Bienvenido! 👋

Este es un proyecto de **Vite + React** que implementa la página de inicio de una plataforma de gestión académica para estudiantes.

## 🚀 Cómo Iniciar

### Paso 1: Abrir la Terminal

Abre PowerShell, CMD o tu terminal favorita en la carpeta del proyecto:

```
cd C:\Users\AngeloPC2\Documents\plataforma-academica
```

### Paso 2: Instalar Dependencias (Primera vez)

```
npm install
```

Esto instalará React, Vite y todas las dependencias necesarias.

### Paso 3: Iniciar el Servidor de Desarrollo

```
npm run dev
```

Verás algo como esto:

```
  VITE v7.1.7  ready in 345 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Paso 4: Abrir en el Navegador

Ve a: `http://localhost:5173`

¡Verás tu aplicación en vivo! 🎉

## 📁 Estructura de Archivos

```
plataforma-academica/
├── src/
│   ├── components/           # Componentes de React
│   │   ├── Header.jsx        # Barra de navegación
│   │   ├── MenuButton.jsx    # Botones del menú
│   │   └── StudentCard.jsx   # Tarjeta del estudiante
│   │
│   ├── pages/                # Páginas principales
│   │   └── InicioDesktop.jsx # Página de inicio
│   │
│   ├── styles/               # Estilos CSS
│   │   ├── Header.css
│   │   ├── MenuButton.css
│   │   ├── StudentCard.css
│   │   └── InicioDesktop.css
│   │
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globales
│   └── main.jsx              # Punto de entrada
│
├── public/                   # Archivos estáticos
├── package.json              # Dependencias del proyecto
├── vite.config.js            # Configuración de Vite
└── README.md                 # Información del proyecto
```

## 🔧 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🎨 Personalización

### Cambiar Colores

Los colores principales están en estos archivos:
- `src/index.css` - Colores globales
- `src/styles/*.css` - Colores específicos de componentes

**Color Principal**: `#00457A` (Azul)

### Agregar Nuevas Páginas

1. Crea un archivo en `src/pages/`
2. Impórtalo en `src/App.jsx`
3. Actualiza las rutas según sea necesario

Ejemplo:
```jsx
import CalificacionesDesktop from './pages/CalificacionesDesktop'
```

### Editar Información del Estudiante

Edita estos datos en `src/pages/InicioDesktop.jsx`:

```jsx
<StudentCard 
  name="Tu Nombre"           // Cambia aquí
  code="TU_CÓDIGO"           // Cambia aquí
  status="Activo"            // Cambia aquí
/>
```

## 🐛 Solucionar Problemas

### Puerto 5173 ya está en uso

Si ves un error sobre el puerto 5173:

```bash
# Mata el proceso anterior y reinicia
npm run dev -- --port 3000  # Usa otro puerto
```

### Node modules corrupto

```bash
# Elimina las dependencias
rm -r node_modules
rm package-lock.json

# Reinstala
npm install
```

### Los estilos no se cargan

- Limpia el navegador: `Ctrl + Shift + Supr`
- Reinicia el servidor: `Ctrl + C` y `npm run dev`

## 📱 Prueba Responsiva

Presiona `F12` en el navegador para abrir las DevTools y:
1. Haz clic en el icono de dispositivo (🔲📱)
2. Selecciona diferentes tamaños de pantalla
3. Prueba: Desktop, Tablet, Mobile

## 🚀 Build para Producción

Cuando estés listo para publicar:

```bash
npm run build
```

Esto crea una carpeta `dist/` con tu aplicación optimizada lista para publicar.

## 📚 Recursos Útiles

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vite.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Próximos Pasos

1. ✅ Página de Inicio implementada
2. 🔄 Agregar más páginas (Calificaciones, Horario, etc.)
3. 🔐 Implementar autenticación
4. 💾 Conectar a una API backend
5. 📦 Deploy a producción

## ¿Necesitas Ayuda?

- Verifica que todos los archivos estén creados
- Asegúrate que los puertos no estén ocupados
- Revisa la consola del navegador (F12)
- Reinicia el servidor

---

¡Disfruta desarrollando! 🎉
