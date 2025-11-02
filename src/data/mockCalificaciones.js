// Mock data para las calificaciones del estudiante

export const estudianteInfo = {
  nombre: "Alverto Benavidez",
  codigo: "202012345",
  estado: "Activo",
  programa: "Ingeniería de Sistemas"
}

export const materias = [
  {
    id: 1,
    nombre: "BIOLOGÍA MECÁNICA",
    codigo: "BIO-301",
    creditos: 3,
    profesor: "Mauricio Torres",
    salon: "B-302",
    horario: "Lunes 7:00 AM - 9:00 AM"
  },
  {
    id: 2,
    nombre: "PROGRAMACIÓN III",
    codigo: "PRG-303",
    creditos: 4,
    profesor: "Mauricio Torres",
    salon: "A-201",
    horario: "Martes 9:00 AM - 11:00 AM"
  },
  {
    id: 3,
    nombre: "GESTIÓN EMPRESARIAL",
    codigo: "GES-205",
    creditos: 3,
    profesor: "Mauricio Torres",
    salon: "C-105",
    horario: "Miércoles 2:00 PM - 4:00 PM"
  },
  {
    id: 4,
    nombre: "TELECOMUNICACIONES",
    codigo: "TEL-401",
    creditos: 4,
    profesor: "Mauricio Torres",
    salon: "D-301",
    horario: "Jueves 10:00 AM - 12:00 PM"
  }
]

// Calificaciones por Corte
export const calificacionesCorteI = {
  biologia: [
    { label: 'NOTA I Exposición', valor: '4.20' },
    { label: 'NOTA II Taller I', valor: '3.80' },
    { label: 'NOTA III Taller II', valor: '4.10' },
    { label: 'DEFINITIVA CORTE I', valor: '4.03' },
  ],
  programacion: [
    { label: 'NOTA I Quiz', valor: '3.50' },
    { label: 'NOTA II Proyecto', valor: '3.20' },
    { label: 'NOTA III Examen', valor: '3.70' },
    { label: 'DEFINITIVA CORTE I', valor: '3.47' },
  ],
  gestion: [
    { label: 'NOTA I Caso Estudio', valor: '4.00' },
    { label: 'NOTA II Análisis', valor: '3.90' },
    { label: 'NOTA III Participación', valor: '4.10' },
    { label: 'DEFINITIVA CORTE I', valor: '4.00' },
  ],
  telecomunicaciones: [
    { label: 'NOTA I Laboratorio', valor: '3.80' },
    { label: 'NOTA II Problemas', valor: '3.70' },
    { label: 'NOTA III Presentación', valor: '3.90' },
    { label: 'DEFINITIVA CORTE I', valor: '3.80' },
  ]
}

export const calificacionesCorteII = {
  biologia: [
    { label: 'NOTA I Laboratorio', valor: '4.50' },
    { label: 'NOTA II Informe', valor: '4.20' },
    { label: 'NOTA III Examen Parcial', valor: '4.60' },
    { label: 'DEFINITIVA CORTE II', valor: '4.43' },
  ],
  programacion: [
    { label: 'NOTA I Algoritmos', valor: '4.20' },
    { label: 'NOTA II Desarrollo', valor: '3.90' },
    { label: 'NOTA III Implementación', valor: '4.00' },
    { label: 'DEFINITIVA CORTE II', valor: '4.03' },
  ],
  gestion: [
    { label: 'NOTA I Plan Empresarial', valor: '4.30' },
    { label: 'NOTA II Exposición', valor: '4.50' },
    { label: 'NOTA III Control', valor: '4.40' },
    { label: 'DEFINITIVA CORTE II', valor: '4.40' },
  ],
  telecomunicaciones: [
    { label: 'NOTA I Circuitos', valor: '4.10' },
    { label: 'NOTA II Señales', valor: '3.90' },
    { label: 'NOTA III Práctica', valor: '4.00' },
    { label: 'DEFINITIVA CORTE II', valor: '4.00' },
  ]
}

export const calificacionesCorteIII = {
  biologia: [
    { label: 'NOTA I Proyecto Final', valor: 'N/A' },
    { label: 'NOTA II Sustentación', valor: 'N/A' },
    { label: 'NOTA III Investigación', valor: 'N/A' },
    { label: 'DEFINITIVA CORTE III', valor: 'N/A' },
  ],
  programacion: [
    { label: 'NOTA I Software', valor: 'N/A' },
    { label: 'NOTA II Testing', valor: 'N/A' },
    { label: 'NOTA III Deployment', valor: 'N/A' },
    { label: 'DEFINITIVA CORTE III', valor: 'N/A' },
  ],
  gestion: [
    { label: 'NOTA I Evaluación Final', valor: 'N/A' },
    { label: 'NOTA II Trabajo Grupal', valor: 'N/A' },
    { label: 'NOTA III Presentación', valor: 'N/A' },
    { label: 'DEFINITIVA CORTE III', valor: 'N/A' },
  ],
  telecomunicaciones: [
    { label: 'NOTA I Proyecto', valor: 'N/A' },
    { label: 'NOTA II Implementación', valor: 'N/A' },
    { label: 'NOTA III Documentación', valor: 'N/A' },
    { label: 'DEFINITIVA CORTE III', valor: 'N/A' },
  ]
}

// Calificaciones Generales (promedio de todos los cortes)
export const calificacionesGenerales = {
  biologia: [
    { label: 'BIOLOGÍA MECÁNICA', valor: '4.23' },
    { label: 'Corte I', valor: '4.03' },
    { label: 'Corte II', valor: '4.43' },
    { label: 'Corte III', valor: 'N/A' },
  ],
  programacion: [
    { label: 'PROGRAMACIÓN III', valor: '3.75' },
    { label: 'Corte I', valor: '3.47' },
    { label: 'Corte II', valor: '4.03' },
    { label: 'Corte III', valor: 'N/A' },
  ],
  gestion: [
    { label: 'GESTIÓN EMPRESARIAL', valor: '4.20' },
    { label: 'Corte I', valor: '4.00' },
    { label: 'Corte II', valor: '4.40' },
    { label: 'Corte III', valor: 'N/A' },
  ],
  telecomunicaciones: [
    { label: 'TELECOMUNICACIONES', valor: '3.90' },
    { label: 'Corte I', valor: '3.80' },
    { label: 'Corte II', valor: '4.00' },
    { label: 'Corte III', valor: 'N/A' },
  ]
}

// Función helper para calcular el promedio general
export const calcularPromedioGeneral = () => {
  const definitivas = [
    parseFloat(calificacionesGenerales.biologia[0].valor),
    parseFloat(calificacionesGenerales.programacion[0].valor),
    parseFloat(calificacionesGenerales.gestion[0].valor),
    parseFloat(calificacionesGenerales.telecomunicaciones[0].valor)
  ]
  
  const suma = definitivas.reduce((acc, nota) => acc + nota, 0)
  const promedio = (suma / definitivas.length).toFixed(2)
  
  return promedio
}

// Función helper para obtener el estado de una nota (aprobado/reprobado)
export const obtenerEstadoNota = (nota) => {
  if (nota === 'N/A') return 'pendiente'
  const notaNum = parseFloat(nota)
  return notaNum >= 3.0 ? 'aprobado' : 'reprobado'
}

// Función helper para obtener el color según la nota
export const obtenerColorNota = (nota) => {
  if (nota === 'N/A') return '#9CA3AF' // Gris
  const notaNum = parseFloat(nota)
  if (notaNum >= 4.5) return '#10B981' // Verde excelente
  if (notaNum >= 4.0) return '#34D399' // Verde bueno
  if (notaNum >= 3.5) return '#FBBF24' // Amarillo aceptable
  if (notaNum >= 3.0) return '#F59E0B' // Naranja mínimo aprobado
  return '#EF4444' // Rojo reprobado
}

// Estadísticas del estudiante
export const estadisticas = {
  promedioGeneral: calcularPromedioGeneral(),
  creditosMatriculados: 14,
  creditosAprobados: 0, // Se actualizará al final del semestre
  materiasActivas: 4,
  materiasAprobadas: 0,
  materiasReprobadas: 0,
  asistenciaPromedio: '92%'
}

// Historial de calificaciones por semestre (opcional)
export const historialAcademico = [
  {
    semestre: '2024-1',
    promedio: '4.1',
    creditosAprobados: 16,
    materiasVistas: 5
  },
  {
    semestre: '2023-2',
    promedio: '3.9',
    creditosAprobados: 15,
    materiasVistas: 5
  },
  {
    semestre: '2023-1',
    promedio: '4.0',
    creditosAprobados: 14,
    materiasVistas: 4
  }
]

export default {
  estudianteInfo,
  materias,
  calificacionesCorteI,
  calificacionesCorteII,
  calificacionesCorteIII,
  calificacionesGenerales,
  estadisticas,
  historialAcademico,
  calcularPromedioGeneral,
  obtenerEstadoNota,
  obtenerColorNota
}

