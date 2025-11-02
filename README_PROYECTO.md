# 🎓 Plataforma Académica ECCI

Aplicación web completa para la gestión académica de estudiantes de la Universidad ECCI, desarrollada con React 19 + Vite.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)
![Router](https://img.shields.io/badge/React_Router-6.x-red)
![Status](https://img.shields.io/badge/Status-100%25_Completo-success)

---

## 📋 Índice

- [Características](#-características)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Páginas Disponibles](#-páginas-disponibles)
- [Próximas Mejoras](#-próximas-mejoras)

---

## ✨ Características

### **Páginas Implementadas (12 totales)**

- 🔐 **Login** - Inicio de sesión
- 🏠 **Dashboard** - Página principal con accesos rápidos
- 👤 **Perfil** - Información completa del estudiante
- 📊 **Calificaciones** - Vista general y por cortes
- ⏰ **Horario** - Clases programadas
- 🔔 **Notificaciones** - Feed de actualizaciones
- 📚 **Recursos Virtuales** - Acceso a materiales
- 🏫 **Ubicación de Salones** - Mapa y direcciones
- 👨‍🏫 **Materias y Profesores** - Listado de cursos
- 📋 **Gestión Administrativa** - Documentos y trámites

### **Funcionalidades**

✅ Navegación fluida con React Router  
✅ Diseño responsive (Desktop, Tablet, Mobile)  
✅ Header funcional con navegación rápida  
✅ Iconos profesionales con React Icons  
✅ Animaciones y transiciones suaves  
✅ Arquitectura escalable y mantenible  
✅ Código limpio y organizado  
✅ CSS modular por componente  

---

## 🖼️ Capturas de Pantalla

### Login
![Login](docs/screenshots/login.png)

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Calificaciones
![Calificaciones](docs/screenshots/calificaciones.png)

---

## 🛠️ Tecnologías

### **Core**
- React 19.1.1
- Vite 7.1.7
- React Router DOM 6.x

### **UI/UX**
- React Icons 5.x
- CSS3 con variables personalizadas
- Google Fonts (Mukta Mahee)

### **Desarrollo**
- ESLint
- Node.js
- npm

---

## 📦 Instalación

### **Requisitos Previos**
- Node.js 18+ 
- npm 9+

### **Pasos**

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/plataforma-academica.git

# 2. Entrar al directorio
cd plataforma-academica

# 3. Instalar dependencias
npm install

# 4. Ejecutar en desarrollo
npm run dev

# 5. Abrir en el navegador
http://localhost:5173
```

---

## 🚀 Uso

### **Desarrollo**
```bash
npm run dev
```

### **Build para Producción**
```bash
npm run build
```

### **Preview del Build**
```bash
npm run preview
```

### **Linting**
```bash
npm run lint
```

---

## 📁 Estructura del Proyecto

```
plataforma-academica/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── MenuButton.jsx
│   │   └── StudentCard.jsx
│   ├── pages/          # Páginas de la aplicación
│   │   ├── Login.jsx
│   │   ├── InicioDesktop.jsx
│   │   ├── Perfil.jsx
│   │   ├── Calificaciones.jsx
│   │   ├── CalificacionesCorte.jsx
│   │   ├── Horario.jsx
│   │   ├── Notificaciones.jsx
│   │   ├── RecursosVirtuales.jsx
│   │   ├── UbicacionSalones.jsx
│   │   ├── MateriasYProfesores.jsx
│   │   └── GestionAdministrativa.jsx
│   ├── styles/         # CSS por componente/página
│   ├── App.jsx         # Router principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 Páginas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | → `/login` | Redirección automática |
| `/login` | Login | Inicio de sesión |
| `/inicio` | InicioDesktop | Dashboard principal |
| `/perfil` | Perfil | Perfil del estudiante |
| `/calificaciones` | Calificaciones | Vista general |
| `/calificaciones/corte/:id` | CalificacionesCorte | Detalles por corte |
| `/horario` | Horario | Horario de clases |
| `/notificaciones` | Notificaciones | Feed de notificaciones |
| `/recursos` | RecursosVirtuales | Recursos educativos |
| `/ubicacion` | UbicacionSalones | Ubicación de aulas |
| `/materias` | MateriasYProfesores | Materias y profesores |
| `/administrativa` | GestionAdministrativa | Gestión administrativa |

---

## 🎨 Guía de Estilos

### **Colores**

```css
/* Colores Principales */
--azul-principal: #00457a;
--azul-secundario: #0066b3;
--fondo: #e9e6e6;
--blanco: rgba(255, 255, 255, 0.7);
--verde-nota: #00a651;
```

### **Tipografía**

```css
/* Font Family */
font-family: 'Mukta Mahee', sans-serif;

/* Tamaños */
Títulos grandes: 48px - 64px
Títulos medianos: 24px - 32px
Texto normal: 16px - 18px
Texto pequeño: 14px
```

### **Espaciado**

```css
/* Padding/Margin */
Pequeño: 10px - 20px
Mediano: 30px - 40px
Grande: 60px - 80px
```

---

## 🔮 Próximas Mejoras

### **Corto Plazo**
- [ ] Integración con backend/API
- [ ] Autenticación real con JWT
- [ ] Persistencia de sesión
- [ ] Loading states

### **Mediano Plazo**
- [ ] Sistema de búsqueda global
- [ ] Filtros avanzados
- [ ] Exportar reportes en PDF
- [ ] Dark mode

### **Largo Plazo**
- [ ] Progressive Web App (PWA)
- [ ] Notificaciones push
- [ ] Chat en tiempo real
- [ ] Aplicación móvil nativa

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto es parte de un ejercicio académico para la Universidad ECCI.

---

## 👥 Autores

- **Desarrollador** - Implementación completa de React
- **Diseñador** - Diseño original en Figma

---

## 🙏 Agradecimientos

- Universidad ECCI por el diseño original
- Comunidad de React por las herramientas
- Figma por los assets

---

## 📞 Contacto

Para preguntas o sugerencias, por favor contactar a través de:

- 📧 Email: [tu-email@ejemplo.com]
- 🌐 Website: [tu-website.com]
- 💼 LinkedIn: [tu-linkedin]

---

**Desarrollado con ❤️ usando React + Vite**

⭐ Si te gustó el proyecto, ¡dale una estrella!


