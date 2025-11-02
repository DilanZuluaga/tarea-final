import React from 'react'
import Header from '../components/Header'
import '../styles/GestionAdministrativa.css'
import { MdAdminPanelSettings } from 'react-icons/md'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"

export default function GestionAdministrativa() {
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

  return (
    <div className="gestion-administrativa">
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="gestion-administrativa__content">
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
          <button className="gestion-administrativa__button">
            Solicitar Nuevo Documento
          </button>
          <button className="gestion-administrativa__button gestion-administrativa__button--secondary">
            Descargar Historial
          </button>
        </div>
      </div>
    </div>
  )
}


