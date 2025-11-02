import React from 'react'
import Header from '../components/Header'
import '../styles/RecursosVirtuales.css'
import { BiBook } from 'react-icons/bi'
import jsPDF from 'jspdf'

// Lista de libros/recursos
const recursos = [
  {
    tipo: "LIBRO",
    titulo: "Fundamentos de Biología Celular",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres",
    autor: "Dr. Carlos Mendoza",
    año: "2023",
    editorial: "Editorial Científica"
  },
  {
    tipo: "LIBRO",
    titulo: "Programación Orientada a Objetos",
    materia: "Programación III",
    profesor: "Mauricio Torres",
    autor: "María Rodríguez",
    año: "2022",
    editorial: "Tech Books"
  },
  {
    tipo: "LIBRO",
    titulo: "Gestión Empresarial Moderna",
    materia: "Gestión Empresarial",
    profesor: "Mauricio Torres",
    autor: "Jorge Pérez",
    año: "2023",
    editorial: "Business Press"
  },
  {
    tipo: "LIBRO",
    titulo: "Principios de Telecomunicaciones",
    materia: "Telecomunicaciones",
    profesor: "Mauricio Torres",
    autor: "Ana Gutiérrez",
    año: "2022",
    editorial: "Tech Publishing"
  },
  {
    tipo: "LIBRO",
    titulo: "Estructuras de Datos Avanzadas",
    materia: "Programación III",
    profesor: "Mauricio Torres",
    autor: "Luis Ramírez",
    año: "2023",
    editorial: "Code Masters"
  },
  {
    tipo: "LIBRO",
    titulo: "Anatomía y Fisiología Humana",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres",
    autor: "Dra. Patricia Silva",
    año: "2023",
    editorial: "Medical Books"
  },
  {
    tipo: "LIBRO",
    titulo: "Marketing Digital",
    materia: "Gestión Empresarial",
    profesor: "Mauricio Torres",
    autor: "Roberto Sánchez",
    año: "2023",
    editorial: "Marketing Pro"
  },
  {
    tipo: "LIBRO",
    titulo: "Redes y Protocolos",
    materia: "Telecomunicaciones",
    profesor: "Mauricio Torres",
    autor: "Fernando López",
    año: "2022",
    editorial: "Network Books"
  },
  {
    tipo: "LIBRO",
    titulo: "Algoritmos y Complejidad",
    materia: "Programación III",
    profesor: "Mauricio Torres",
    autor: "Daniel Castro",
    año: "2023",
    editorial: "Algorithm Press"
  },
  {
    tipo: "LIBRO",
    titulo: "Finanzas Corporativas",
    materia: "Gestión Empresarial",
    profesor: "Mauricio Torres",
    autor: "Carmen Díaz",
    año: "2022",
    editorial: "Finance Books"
  },
  {
    tipo: "LIBRO",
    titulo: "Señales y Sistemas",
    materia: "Telecomunicaciones",
    profesor: "Mauricio Torres",
    autor: "Miguel Ángel Torres",
    año: "2023",
    editorial: "Signal Press"
  }
]

export default function RecursosVirtuales() {
  const descargarLibroPDF = (recurso) => {
    try {
      const doc = new jsPDF()
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()

      // Portada del libro
      doc.setFillColor(0, 69, 122)
      doc.rect(0, 0, pageWidth, pageHeight, 'F')

      // Título del libro
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(28)
      doc.setFont('helvetica', 'bold')

      // Dividir el título en líneas si es muy largo
      const tituloLines = doc.splitTextToSize(recurso.titulo, pageWidth - 40)
      doc.text(tituloLines, pageWidth / 2, 80, { align: 'center' })

      // Autor
      doc.setFontSize(18)
      doc.setFont('helvetica', 'normal')
      doc.text('Por: ' + recurso.autor, pageWidth / 2, 120, { align: 'center' })

      // Separador
      doc.setDrawColor(255, 255, 255)
      doc.setLineWidth(0.5)
      doc.line(40, 140, pageWidth - 40, 140)

      // Información adicional
      doc.setFontSize(14)
      doc.text('Materia: ' + recurso.materia, pageWidth / 2, 160, { align: 'center' })
      doc.text('Profesor: ' + recurso.profesor, pageWidth / 2, 175, { align: 'center' })
      doc.text('Editorial: ' + recurso.editorial, pageWidth / 2, 190, { align: 'center' })
      doc.text('Año: ' + recurso.año, pageWidth / 2, 205, { align: 'center' })

      // Logo Universidad
      doc.setFontSize(16)
      doc.text('Universidad ECCI', pageWidth / 2, 250, { align: 'center' })

      // Nueva página - Contenido
      doc.addPage()
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(20)
      doc.setFont('helvetica', 'bold')
      doc.text('Contenido del Libro', 20, 30)

      // Descripción
      doc.setFontSize(12)
      doc.setFont('helvetica', 'normal')
      const descripcion = [
        'Este es un recurso educativo proporcionado por la Universidad ECCI.',
        '',
        'El presente material forma parte de los recursos académicos disponibles',
        'para los estudiantes de la asignatura ' + recurso.materia + '.',
        '',
        'Este documento ha sido seleccionado cuidadosamente por el profesor',
        recurso.profesor + ' como material complementario para el desarrollo',
        'de las competencias requeridas en el curso.',
        '',
        'Para más información sobre este recurso o para solicitar material',
        'adicional, por favor contacte con el profesor responsable de la',
        'asignatura.',
        '',
        'Nota: Este PDF es una representación demo del recurso. En un entorno',
        'real, aquí se encontraría el contenido completo del libro o material',
        'educativo solicitado.'
      ]

      let yPosition = 50
      descripcion.forEach(line => {
        doc.text(line, 20, yPosition)
        yPosition += 8
      })

      // Pie de página
      doc.setFontSize(10)
      doc.setTextColor(128, 128, 128)
      doc.text(
        'Recursos Virtuales - Universidad ECCI',
        pageWidth / 2,
        pageHeight - 20,
        { align: 'center' }
      )

      // Descargar
      const nombreArchivo = recurso.titulo.replace(/\s+/g, '_') + '.pdf'
      doc.save(nombreArchivo)
    } catch (error) {
      console.error('Error al generar el PDF:', error)
      alert('Hubo un error al descargar el libro. Por favor, intenta de nuevo.')
    }
  }

  return (
    <div className="recursos">
      <Header />
      
      <div className="recursos__content">
        <div className="recursos__header">
          <BiBook className="recursos__icon" />
          <h1>RECURSOS VIRTUALES</h1>
        </div>
        
        <div className="recursos__grid">
          {recursos.map((recurso, index) => (
            <div
              key={index}
              className="recursos__card"
              onClick={() => descargarLibroPDF(recurso)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  descargarLibroPDF(recurso)
                }
              }}
            >
              <div className="recursos__card-icon">
                <BiBook />
              </div>
              <div className="recursos__card-content">
                <h3>{recurso.tipo}</h3>
                <p className="recursos__card-titulo">{recurso.titulo}</p>
                <p className="recursos__card-materia">{recurso.materia}</p>
                <p className="recursos__card-profesor">{recurso.profesor}</p>
              </div>
              <div className="recursos__card-download">
                <span>Clic para descargar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


