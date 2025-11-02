import React from 'react'
import '../styles/TablaCalificaciones.css'

export default function TablaCalificaciones({ calificaciones, titulo }) {
  return (
    <div className="tabla-calificaciones">
      <h2 className="tabla-calificaciones__titulo">{titulo}</h2>
      <div className="tabla-calificaciones__tabla">
        {calificaciones.map((cal, index) => (
          <div key={index} className="tabla-calificaciones__row">
            <div className="tabla-calificaciones__cell">
              <span className="tabla-calificaciones__label">{cal.label}</span>
            </div>
            <div className="tabla-calificaciones__cell">
              <span className="tabla-calificaciones__valor">{cal.valor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
