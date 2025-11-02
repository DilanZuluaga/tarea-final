import React, { useState } from 'react'
import Header from '../components/Header'
import '../styles/GestionAdministrativa.css'
import { MdAdminPanelSettings } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default function GestionAdministrativa() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [tipoDocumento, setTipoDocumento] = useState('')

  const documentos = [
    {
      numero: "000032213325451243",
      fecha: "11/06/2023"
    },
    {
      numero: "000032213325456543",
      fecha: "1/01/2023"
    },
    {
      numero: "000032213325451243",
      fecha: "11/06/2023"
    },
    {
      numero: "000032213325456543",
      fecha: "1/01/2023"
    }
  ]

  const abrirModal = () => {
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setTipoDocumento('')
  }

  const enviarSolicitud = (e) => {
    e.preventDefault()
    if (tipoDocumento) {
      alert(`Solicitud de ${tipoDocumento} enviada correctamente. Recibirás una notificación cuando esté listo.`)
      cerrarModal()
    } else {
      alert('Por favor selecciona un tipo de documento')
    }
  }

  const descargarPDF = () => {
    try {
      const pdfDoc = new jsPDF()

      // Configurar el documento
      const pageWidth = pdfDoc.internal.pageSize.getWidth()

      // Logo y encabezado
      pdfDoc.setFillColor(0, 69, 122) // Color #00457a
      pdfDoc.rect(0, 0, pageWidth, 40, 'F')

      pdfDoc.setTextColor(255, 255, 255)
      pdfDoc.setFontSize(24)
      pdfDoc.setFont('helvetica', 'bold')
      pdfDoc.text('Universidad ECCI', pageWidth / 2, 20, { align: 'center' })

      pdfDoc.setFontSize(16)
      pdfDoc.text('Gestión Administrativa', pageWidth / 2, 32, { align: 'center' })

      // Información del estudiante
      pdfDoc.setTextColor(0, 0, 0)
      pdfDoc.setFontSize(12)
      pdfDoc.setFont('helvetica', 'bold')
      pdfDoc.text('Información del Estudiante', 14, 55)

      pdfDoc.setFont('helvetica', 'normal')
      pdfDoc.setFontSize(11)
      pdfDoc.text('Nombre: Alverto Benavidez', 14, 65)
      pdfDoc.text('Estado: Activo', 14, 72)
      pdfDoc.text('Fecha de emisión: ' + new Date().toLocaleDateString('es-ES'), 14, 79)

      // Tabla de documentos
      const tableData = documentos.map(documento => [documento.numero, documento.fecha])

      autoTable(pdfDoc, {
        head: [['NÚMERO DE DOCUMENTO', 'FECHA']],
        body: tableData,
        startY: 90,
        theme: 'grid',
        headStyles: {
          fillColor: [0, 69, 122],
          textColor: [255, 255, 255],
          fontSize: 12,
          fontStyle: 'bold',
          halign: 'center'
        },
        bodyStyles: {
          fontSize: 10,
          halign: 'center'
        },
        alternateRowStyles: {
          fillColor: [240, 240, 240]
        },
        margin: { left: 14, right: 14 }
      })

      // Guardar el PDF
      pdfDoc.save('Historial_Documentos_' + new Date().toISOString().split('T')[0] + '.pdf')
    } catch (error) {
      console.error('Error al generar el PDF:', error)
      alert('Hubo un error al generar el PDF. Por favor, intenta de nuevo.')
    }
  }

  return (
    <div className="gestion-administrativa">
      <Header />
      
      <div className="gestion-administrativa__content">
        <div className="gestion-administrativa__left">
          <div className="gestion-administrativa__header">
            <MdAdminPanelSettings className="gestion-administrativa__icon" />
            <h1>GESTIÓN ADMINISTRATIVA</h1>
          </div>
          
          <div className="gestion-administrativa__student-info">
            <p>
              <span className="gestion-administrativa__label">Nombre del Estudiante:</span>
              <span className="gestion-administrativa__value">Alverto Benavidez</span>
            </p>
            <p>
              <span className="gestion-administrativa__label">Estado:</span>
              <span className="gestion-administrativa__value">Activo</span>
            </p>
          </div>
        </div>
        
        <div className="gestion-administrativa__right">
          <div className="gestion-administrativa__table">
          <div className="gestion-administrativa__table-header">
            <div className="gestion-administrativa__table-col">NÚMERO DE DOCUMENTO</div>
            <div className="gestion-administrativa__table-col">FECHA</div>
          </div>
          
          <div className="gestion-administrativa__table-body">
            {documentos.map((doc, index) => (
              <div key={index} className="gestion-administrativa__table-row">
                <div className="gestion-administrativa__table-cell">
                  {doc.numero}
                </div>
                <div className="gestion-administrativa__table-cell">
                  {doc.fecha}
                </div>
              </div>
            ))}
          </div>
          </div>
          
          <div className="gestion-administrativa__actions">
            <button
              className="gestion-administrativa__button"
              onClick={abrirModal}
            >
              Solicitar Nuevo Documento
            </button>
            <button
              className="gestion-administrativa__button gestion-administrativa__button--secondary"
              onClick={descargarPDF}
            >
              <HiDownload size={20} />
              <span>Descargar Historial (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal para solicitar documento */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Solicitar Nuevo Documento</h2>
              <button className="modal-close" onClick={cerrarModal}>
                <IoMdClose size={28} />
              </button>
            </div>

            <form onSubmit={enviarSolicitud} className="modal-form">
              <div className="modal-form-group">
                <label htmlFor="tipo-documento">Tipo de Documento:</label>
                <select
                  id="tipo-documento"
                  value={tipoDocumento}
                  onChange={(e) => setTipoDocumento(e.target.value)}
                  className="modal-select"
                  required
                >
                  <option value="">Selecciona un documento</option>
                  <option value="Certificado de Estudios">Certificado de Estudios</option>
                  <option value="Constancia de Matrícula">Constancia de Matrícula</option>
                  <option value="Certificado de Notas">Certificado de Notas</option>
                  <option value="Certificado de Horario">Certificado de Horario</option>
                  <option value="Paz y Salvo Académico">Paz y Salvo Académico</option>
                  <option value="Carné Estudiantil">Carné Estudiantil</option>
                </select>
              </div>

              <div className="modal-info">
                <p>El documento solicitado será procesado en un plazo máximo de 3 días hábiles.</p>
                <p>Recibirás una notificación cuando esté listo para descargar.</p>
              </div>

              <div className="modal-actions">
                <button type="button" className="modal-button modal-button--cancel" onClick={cerrarModal}>
                  Cancelar
                </button>
                <button type="submit" className="modal-button modal-button--submit">
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}


