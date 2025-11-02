import React from 'react'
import Header from '../components/Header'
import '../styles/MateriasYProfesores.css'
import { FaChalkboardTeacher } from 'react-icons/fa'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"

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
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="materias-profesores__content">
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
  )
}


