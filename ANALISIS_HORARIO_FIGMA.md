# 🔍 ANÁLISIS DE IMÁGENES DE HORARIO - FIGMA vs IMPLEMENTACIÓN

**Fecha de análisis:** 2 de noviembre de 2025  
**Proyecto:** Plataforma Académica ECCI  
**Página analizada:** Horario (`src/pages/Horario.jsx`)

---

## 📋 RESUMEN EJECUTIVO

Se ha detectado que las imágenes de la página de Horario **NO COINCIDEN** con el diseño de Figma. El código actual usa URLs externas de Freepik en lugar de las imágenes locales del proyecto ubicadas en `public/assets/horario/`.

---

## 🎨 COMPARACIÓN FIGMA vs IMPLEMENTACIÓN ACTUAL

### **1. BIOLOGÍA MECÁNICA**

**Figma (Diseño correcto):**
- 🔬 Ilustración de científico con microscopio
- Estilo: Flat design con colores azul/morado
- Elementos: Persona, microscopio, elementos científicos

**Implementación Actual:**
- ✅ **SIMILAR** - Muestra imagen de científico con microscopio
- URL actual: `https://img.freepik.com/free-vector/scientist-analyzing-samples-with-microscope_23-2148534207.jpg`
- Archivo local disponible: `public/assets/horario/biologia.png`

---

### **2. PROGRAMACIÓN III**

**Figma (Diseño correcto):**
- 💻 Ilustración de persona con computadora
- Estilo: Flat design con colores azul/verde
- Elementos: Persona sentada, computadora, silla

**Implementación Actual:**
- ✅ **SIMILAR** - Muestra imagen de persona con computadora
- URL actual: `https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg`
- Archivos locales disponibles:
  - `public/assets/horario/prog-group1.png`
  - `public/assets/horario/programacion.svg`
  - `public/assets/horario/programacion-persona.svg`

---

### **3. GESTIÓN EMPRESARIAL**

**Figma (Diseño correcto):**
- ⚙️ Ilustración de personas trabajando con engranajes
- Estilo: Flat design con colores azul/naranja/rosa
- Elementos: 2-3 personas, engranajes, trabajo en equipo

**Implementación Actual:**
- ❌ **INCORRECTO** - Muestra flotadores de piscina coloridos
- URL actual: `https://img.freepik.com/free-vector/business-team-working-cogwheel-mechanism-together_74855-6667.jpg`
- Archivo local disponible: `public/assets/horario/gestion.svg`
- **PROBLEMA CRÍTICO:** La imagen no coincide en absoluto con el diseño

---

### **4. TELECOMUNICACIONES**

**Figma (Diseño correcto):**
- 🎧 Ilustración de persona con auriculares
- Estilo: Flat design con colores azul/rosa
- Elementos: Persona, auriculares, comunicación

**Implementación Actual:**
- ⚠️ **NO VERIFICADO** - No visible en screenshot actual
- URL actual: `https://img.freepik.com/free-vector/customer-service-concept-illustration_114360-1919.jpg`
- Archivo local disponible: `public/assets/horario/telecom.svg`

---

## 🚨 PROBLEMAS IDENTIFICADOS

### **1. Uso de URLs Externas en lugar de Assets Locales**

**Código actual en `Horario.jsx`:**

```javascript
// ❌ INCORRECTO - URLs externas de Freepik
const imgBiologia = "https://img.freepik.com/free-vector/scientist-analyzing-samples-with-microscope_23-2148534207.jpg"
const imgProgramacion = "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
const imgGestion = "https://img.freepik.com/free-vector/business-team-working-cogwheel-mechanism-together_74855-6667.jpg"
const imgTelecomunicaciones = "https://img.freepik.com/free-vector/customer-service-concept-illustration_114360-1919.jpg"
```

**Problemas:**
- ❌ Dependencia de servicios externos (pueden fallar o cambiar)
- ❌ No coinciden con el diseño de Figma
- ❌ Imágenes locales del proyecto no se están utilizando
- ❌ Posibles problemas de derechos de autor

---

### **2. Archivos Locales NO Utilizados**

El proyecto tiene imágenes locales correctas pero no se están usando:

```
public/assets/horario/
  ├── biologia.png              ❌ No usado
  ├── gestion.svg                ❌ No usado
  ├── prog-group1.png            ❌ No usado
  ├── programacion-persona.svg   ❌ No usado
  ├── programacion.svg           ❌ No usado
  └── telecom.svg                ❌ No usado
```

---

### **3. Discrepancia Visual Crítica**

La imagen de **GESTIÓN EMPRESARIAL** muestra flotadores de piscina en lugar de personas con engranajes, lo cual es completamente diferente al diseño de Figma.

---

## ✅ SOLUCIÓN PROPUESTA

### **Paso 1: Verificar las Imágenes Locales**

Necesitamos confirmar que las imágenes en `public/assets/horario/` coinciden con el diseño de Figma.

### **Paso 2: Actualizar el Código**

Reemplazar las URLs externas por las rutas locales:

```javascript
// ✅ CORRECTO - Usar assets locales
const imgBiologia = "/assets/horario/biologia.png"
const imgProgramacion = "/assets/horario/programacion.svg" // o prog-group1.png o programacion-persona.svg
const imgGestion = "/assets/horario/gestion.svg"
const imgTelecomunicaciones = "/assets/horario/telecom.svg"
```

### **Paso 3: Obtener Imágenes desde Figma (si las locales no coinciden)**

Si las imágenes locales no son las correctas, necesitaremos:
1. Exportar las imágenes desde Figma usando las herramientas MCP
2. Guardarlas en `public/assets/horario/`
3. Actualizar las referencias en el código

---

## 📊 TABLA DE VERIFICACIÓN

| Materia | Figma | Implementación | Archivo Local | Estado |
|---------|-------|----------------|---------------|--------|
| Biología | ✅ Científico + microscopio | ✅ Similar | biologia.png | ⚠️ Usar local |
| Programación | ✅ Persona + computadora | ✅ Similar | 3 archivos .svg/.png | ⚠️ Usar local |
| Gestión | ✅ Personas + engranajes | ❌ Flotadores | gestion.svg | 🚨 **CRÍTICO** |
| Telecomunicaciones | ✅ Persona + auriculares | ⚠️ No verificado | telecom.svg | ⚠️ Verificar |

---

## 🎯 PRÓXIMOS PASOS

1. ✅ **Análisis completado** - Discrepancias identificadas
2. 🔄 **Verificar archivos locales** - Revisar si coinciden con Figma
3. 🔄 **Actualizar código** - Reemplazar URLs por rutas locales
4. 🔄 **Probar en navegador** - Verificar que las imágenes se muestren correctamente
5. 🔄 **Documentar cambios** - Actualizar documentación del proyecto

---

## 📝 NOTAS ADICIONALES

- Las imágenes del diseño de Figma siguen un estilo consistente (flat design)
- Todas usan una paleta de colores similar (azul, morado, rosa, naranja, verde)
- El estilo es profesional y moderno
- Las ilustraciones son vectoriales (idealmente usar .svg para mejor calidad)

---

**Conclusión:** Se requiere actualizar `src/pages/Horario.jsx` para usar las imágenes locales y verificar/reemplazar la imagen de Gestión Empresarial que no coincide con el diseño de Figma.


