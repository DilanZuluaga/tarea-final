import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Calificaciones.css'
import { HiClipboardList } from 'react-icons/hi'

export default function Calificaciones() {
  const materias = [
    { nombre: "BIOLOGÍA MECÁNICA", link: "/calificaciones/general" },
    { nombre: "PROGRAMACIÓN III", link: "/calificaciones/general" },
    { nombre: "GESTIÓN EMPRESARIAL", link: "/calificaciones/general" },
    { nombre: "TELECOMUNICACIONES", link: "/calificaciones/general" }
  ]

  return (
    <div className="calificaciones">
      <Header />
      
      <div className="calificaciones__content">
        <div className="calificaciones__left">
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
        </div>
        
        <div className="calificaciones__right">
          <div className="calificaciones__materias-grid">
            {materias.map((materia, index) => (
              <Link 
                key={index} 
                to={materia.link} 
                className="calificaciones__materia-button"
              >
                <HiClipboardList className="calificaciones__materia-icon" />
                <span>{materia.nombre}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


