import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Calificaciones.css'
import { HiClipboardList } from 'react-icons/hi'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"
const imgMateria = "https://www.figma.com/api/mcp/asset/7d8473eb-a993-453c-8010-e8138a167005"

export default function Calificaciones() {
  const materias = [
    {
      nombre: "BIOLOGÍA MECÁNICA",
      imagen: imgMateria,
      corte1: "4.20",
      corte2: "1.0",
      corte3: "REPORTE NO ENCONTRADO"
    }
  ]

  return (
    <div className="calificaciones">
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="calificaciones__content">
        <div className="calificaciones__header">
          <HiClipboardList className="calificaciones__icon" />
          <h1>CALIFICACIONES</h1>
        </div>
        
        <div className="calificaciones__student-info">
          <p>
            <span className="calificaciones__label">Nombre del Estudiante:</span>
            <span className="calificaciones__value">Alverto Benavidez</span>
          </p>
          <p>
            <span className="calificaciones__label">Estado:</span>
            <span className="calificaciones__value">Activo</span>
          </p>
        </div>
        
        <div className="calificaciones__materias">
          {materias.map((materia, index) => (
            <div key={index} className="calificaciones__materia-card">
              <div className="calificaciones__materia-header">
                <div className="calificaciones__materia-imagen">
                  <img src={materia.imagen} alt={materia.nombre} />
                </div>
                <h2>{materia.nombre}</h2>
              </div>
              
              <div className="calificaciones__materia-body">
                <div className="calificaciones__corte">
                  <Link to="/calificaciones/corte/1" className="calificaciones__corte-link">
                    <span className="calificaciones__corte-label">CORTE I</span>
                    <span className="calificaciones__corte-nota">{materia.corte1}</span>
                  </Link>
                </div>
                
                <div className="calificaciones__corte">
                  <Link to="/calificaciones/corte/2" className="calificaciones__corte-link">
                    <span className="calificaciones__corte-label">CORTE II</span>
                    <span className="calificaciones__corte-nota">{materia.corte2}</span>
                  </Link>
                </div>
                
                <div className="calificaciones__corte">
                  <Link to="/calificaciones/corte/3" className="calificaciones__corte-link">
                    <span className="calificaciones__corte-label">CORTE III</span>
                    <span className="calificaciones__corte-nota calificaciones__corte-nota--na">
                      {materia.corte3}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


