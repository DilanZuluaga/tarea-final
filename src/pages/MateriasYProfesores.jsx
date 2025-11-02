import React from 'react'
import Header from '../components/Header'
import '../styles/MateriasYProfesores.css'
import { FaChalkboardTeacher } from 'react-icons/fa'

export default function MateriasYProfesores() {
  const materias = [
    {
      nombre: "BIOLOGÍA MECÁNICA",
      profesor: "MAURICIO TORRES"
    },
    {
      nombre: "PROGRAMACIÓN III",
      profesor: "LUCIA GOMEZ"
    },
    {
      nombre: "GESTIÓN EMPRESARIAL",
      profesor: "MAURICIO TORRES"
    },
    {
      nombre: "TELECOMUNICACIONES",
      profesor: "LUCIA GOMEZ"
    }
  ]

  return (
    <div className="materias-profesores">
      <Header />
      
      <div className="materias-profesores__content">
        <div className="materias-profesores__left">
          <div className="materias-profesores__header">
            <FaChalkboardTeacher className="materias-profesores__icon" />
            <h1>MATERIAS Y PROFESORES</h1>
          </div>
          
          <div className="materias-profesores__student-info">
            <p>
              <span className="materias-profesores__label">Nombre del Estudiante:</span>
              <span className="materias-profesores__value">Alverto Benavidez</span>
            </p>
            <p>
              <span className="materias-profesores__label">Estado:</span>
              <span className="materias-profesores__value">Activo</span>
            </p>
          </div>
        </div>
        
        <div className="materias-profesores__right">
          <div className="materias-profesores__table">
          <div className="materias-profesores__table-header">
            <div className="materias-profesores__table-col">MATERIA</div>
            <div className="materias-profesores__table-col">PROFESOR</div>
          </div>
          
          <div className="materias-profesores__table-body">
            {materias.map((materia, index) => (
              <div key={index} className="materias-profesores__table-row">
                <div className="materias-profesores__table-cell">
                  {materia.nombre}
                </div>
                <div className="materias-profesores__table-cell">
                  {materia.profesor}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


