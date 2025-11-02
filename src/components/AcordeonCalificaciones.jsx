import React, { useState } from 'react'
import '../styles/AcordeonCalificaciones.css'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { obtenerColorNota } from '../data/mockCalificaciones'

export default function AcordeonCalificaciones({ calificaciones, titulo }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAcordeon = () => {
    setIsOpen(!isOpen)
  }

  // Obtener la nota definitiva (última nota del array)
  const notaDefinitiva = calificaciones[calificaciones.length - 1]?.valor || 'N/A'
  const colorNota = obtenerColorNota(notaDefinitiva)

  return (
    <div className={`acordeon-calificaciones ${isOpen ? 'acordeon-calificaciones--open' : ''}`}>
      <div className="acordeon-calificaciones__header" onClick={toggleAcordeon}>
        <div className="acordeon-calificaciones__titulo-container">
          <h3 className="acordeon-calificaciones__titulo">{titulo}</h3>
          <div 
            className="acordeon-calificaciones__nota-definitiva"
            style={{ backgroundColor: colorNota }}
          >
            {notaDefinitiva}
          </div>
        </div>
        <div className="acordeon-calificaciones__icon">
          {isOpen ? <IoChevronUp size={24} /> : <IoChevronDown size={24} />}
        </div>
      </div>

      <div className={`acordeon-calificaciones__content ${isOpen ? 'acordeon-calificaciones__content--open' : ''}`}>
        <div className="acordeon-calificaciones__tabla">
          {calificaciones.map((cal, index) => (
            <div key={index} className="acordeon-calificaciones__row">
              <div className="acordeon-calificaciones__cell">
                <span className="acordeon-calificaciones__label">{cal.label}</span>
              </div>
              <div className="acordeon-calificaciones__cell">
                <span 
                  className={`acordeon-calificaciones__valor ${cal.valor === 'N/A' ? 'acordeon-calificaciones__valor--na' : ''}`}
                  style={{ color: obtenerColorNota(cal.valor) }}
                >
                  {cal.valor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

