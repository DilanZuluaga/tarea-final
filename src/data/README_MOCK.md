# 📊 Mock de Calificaciones

Este archivo contiene todos los datos de ejemplo (mock data) para el sistema de calificaciones de la plataforma académica.

## 📁 Archivo Principal
`src/data/mockCalificaciones.js`

---

## 📚 Estructura de Datos

### 1. **Información del Estudiante**
```javascript
import { estudianteInfo } from '../data/mockCalificaciones'

console.log(estudianteInfo.nombre)    // "Alverto Benavidez"
console.log(estudianteInfo.codigo)    // "202012345"
console.log(estudianteInfo.estado)    // "Activo"
console.log(estudianteInfo.programa)  // "Ingeniería de Sistemas"
```

---

### 2. **Lista de Materias**
```javascript
import { materias } from '../data/mockCalificaciones'

materias.forEach(materia => {
  console.log(materia.nombre)      // "BIOLOGÍA MECÁNICA"
  console.log(materia.profesor)    // "Mauricio Torres"
  console.log(materia.creditos)    // 3
})
```

---

### 3. **Calificaciones por Corte**

#### Corte I
```javascript
import { calificacionesCorteI } from '../data/mockCalificaciones'

// Ejemplo: Biología
calificacionesCorteI.biologia.forEach(nota => {
  console.log(nota.label)  // "NOTA I Exposición"
  console.log(nota.valor)  // "4.20"
})

// Otras materias disponibles:
// - calificacionesCorteI.programacion
// - calificacionesCorteI.gestion
// - calificacionesCorteI.telecomunicaciones
```

#### Corte II
```javascript
import { calificacionesCorteII } from '../data/mockCalificaciones'

// Estructura igual al Corte I
```

#### Corte III
```javascript
import { calificacionesCorteIII } from '../data/mockCalificaciones'

// Notas pendientes (N/A)
```

---

### 4. **Calificaciones Generales**
```javascript
import { calificacionesGenerales } from '../data/mockCalificaciones'

// Vista general con promedios de todos los cortes
calificacionesGenerales.biologia.forEach(item => {
  console.log(item.label)  // "BIOLOGÍA MECÁNICA"
  console.log(item.valor)  // "4.23"
})
```

---

### 5. **Funciones Helper**

#### Calcular Promedio General
```javascript
import { calcularPromedioGeneral } from '../data/mockCalificaciones'

const promedio = calcularPromedioGeneral()
console.log(promedio)  // "4.02"
```

#### Obtener Estado de una Nota
```javascript
import { obtenerEstadoNota } from '../data/mockCalificaciones'

const estado1 = obtenerEstadoNota('4.5')   // "aprobado"
const estado2 = obtenerEstadoNota('2.8')   // "reprobado"
const estado3 = obtenerEstadoNota('N/A')   // "pendiente"
```

#### Obtener Color según Nota
```javascript
import { obtenerColorNota } from '../data/mockCalificaciones'

const color1 = obtenerColorNota('4.8')  // "#10B981" (Verde excelente)
const color2 = obtenerColorNota('4.2')  // "#34D399" (Verde bueno)
const color3 = obtenerColorNota('3.7')  // "#FBBF24" (Amarillo aceptable)
const color4 = obtenerColorNota('3.2')  // "#F59E0B" (Naranja mínimo)
const color5 = obtenerColorNota('2.5')  // "#EF4444" (Rojo reprobado)
const color6 = obtenerColorNota('N/A')  // "#9CA3AF" (Gris pendiente)
```

---

### 6. **Estadísticas**
```javascript
import { estadisticas } from '../data/mockCalificaciones'

console.log(estadisticas.promedioGeneral)      // "4.02"
console.log(estadisticas.creditosMatriculados) // 14
console.log(estadisticas.materiasActivas)      // 4
console.log(estadisticas.asistenciaPromedio)   // "92%"
```

---

### 7. **Historial Académico**
```javascript
import { historialAcademico } from '../data/mockCalificaciones'

historialAcademico.forEach(semestre => {
  console.log(semestre.semestre)          // "2024-1"
  console.log(semestre.promedio)          // "4.1"
  console.log(semestre.creditosAprobados) // 16
  console.log(semestre.materiasVistas)    // 5
})
```

---

## 🎯 Ejemplos de Uso en Componentes

### Ejemplo 1: CalificacionesCorteI.jsx
```javascript
import React from 'react'
import { calificacionesCorteI, estudianteInfo } from '../../data/mockCalificaciones'
import TablaCalificaciones from '../../components/TablaCalificaciones'

export default function CalificacionesCorteI() {
  return (
    <div className="calificaciones">
      <div className="calificaciones__student-info">
        <p><strong>Nombre:</strong> {estudianteInfo.nombre}</p>
        <p><strong>Estado:</strong> {estudianteInfo.estado}</p>
      </div>

      <TablaCalificaciones 
        calificaciones={calificacionesCorteI.biologia} 
        titulo="BIOLOGÍA MECÁNICA - CORTE I" 
      />
      
      <TablaCalificaciones 
        calificaciones={calificacionesCorteI.programacion} 
        titulo="PROGRAMACIÓN III - CORTE I" 
      />
      
      <TablaCalificaciones 
        calificaciones={calificacionesCorteI.gestion} 
        titulo="GESTIÓN EMPRESARIAL - CORTE I" 
      />
      
      <TablaCalificaciones 
        calificaciones={calificacionesCorteI.telecomunicaciones} 
        titulo="TELECOMUNICACIONES - CORTE I" 
      />
    </div>
  )
}
```

### Ejemplo 2: Vista de Estadísticas
```javascript
import React from 'react'
import { estadisticas, calcularPromedioGeneral } from '../data/mockCalificaciones'

export default function EstadisticasEstudiante() {
  return (
    <div className="estadisticas">
      <h2>Estadísticas Académicas</h2>
      
      <div className="estadisticas__item">
        <span>Promedio General:</span>
        <strong>{calcularPromedioGeneral()}</strong>
      </div>
      
      <div className="estadisticas__item">
        <span>Créditos Matriculados:</span>
        <strong>{estadisticas.creditosMatriculados}</strong>
      </div>
      
      <div className="estadisticas__item">
        <span>Materias Activas:</span>
        <strong>{estadisticas.materiasActivas}</strong>
      </div>
      
      <div className="estadisticas__item">
        <span>Asistencia:</span>
        <strong>{estadisticas.asistenciaPromedio}</strong>
      </div>
    </div>
  )
}
```

### Ejemplo 3: Tarjeta de Nota con Color Dinámico
```javascript
import React from 'react'
import { obtenerColorNota, obtenerEstadoNota } from '../data/mockCalificaciones'

export default function NotaCard({ nota }) {
  const color = obtenerColorNota(nota.valor)
  const estado = obtenerEstadoNota(nota.valor)
  
  return (
    <div 
      className="nota-card" 
      style={{ borderLeftColor: color }}
    >
      <span className="nota-card__label">{nota.label}</span>
      <span 
        className={`nota-card__valor nota-card__valor--${estado}`}
        style={{ color: color }}
      >
        {nota.valor}
      </span>
    </div>
  )
}
```

---

## 📝 Notas Importantes

1. **Todas las notas del Corte III están en "N/A"** porque aún no han sido calificadas
2. **El promedio se calcula automáticamente** usando la función `calcularPromedioGeneral()`
3. **Los colores se asignan según rangos**:
   - 4.5-5.0: Verde excelente (#10B981)
   - 4.0-4.4: Verde bueno (#34D399)
   - 3.5-3.9: Amarillo aceptable (#FBBF24)
   - 3.0-3.4: Naranja mínimo (#F59E0B)
   - 0.0-2.9: Rojo reprobado (#EF4444)
   - N/A: Gris pendiente (#9CA3AF)

---

## 🔄 Actualización de Datos

Para modificar las calificaciones, edita el archivo:
```
src/data/mockCalificaciones.js
```

Y los cambios se reflejarán automáticamente en todos los componentes que usen estos datos.

---

## ✅ Ventajas de usar Mock Data centralizado

- ✅ **Un solo lugar** para modificar datos
- ✅ **Reutilización** en múltiples componentes
- ✅ **Consistencia** de datos en toda la aplicación
- ✅ **Fácil mantenimiento** y actualización
- ✅ **Testing más simple** al tener datos predecibles
- ✅ **Funciones helper** para cálculos comunes

---

## 🚀 Próximos Pasos

1. Importar estos datos en los componentes existentes
2. Reemplazar los datos hardcodeados con imports del mock
3. Utilizar las funciones helper para cálculos dinámicos
4. Crear componentes adicionales que aprovechen estos datos

