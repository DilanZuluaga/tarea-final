import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Calificaciones.css'
import { HiClipboardList } from 'react-icons/hi'

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
      <Header />
      
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


