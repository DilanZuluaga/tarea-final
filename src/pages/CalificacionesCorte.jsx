import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/CalificacionesCorte.css'
import { HiClipboardList } from 'react-icons/hi'
import { IoArrowBack } from 'react-icons/io5'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"
const imgMateria = "https://www.figma.com/api/mcp/asset/7d8473eb-a993-453c-8010-e8138a167005"

export default function CalificacionesCorte() {
  const { corteId } = useParams()
  
  const cortes = {
    '1': {
      nombre: 'CORTE I',
      materias: [
        {
          nombre: "BIOLOGÍA MECÁNICA",
          imagen: imgMateria,
          notas: [
            { nombre: "NOTA I Exposición", valor: "4.20" },
            { nombre: "NOTA II Taller I", valor: "1.0" },
            { nombre: "NOTA III Taller II", valor: "2.20" },
            { nombre: "DEFINITIVA", valor: "4.4" }
          ]
        }
      ]
    },
    '2': {
      nombre: 'CORTE II',
      materias: [
        {
          nombre: "BIOLOGÍA MECÁNICA",
          imagen: imgMateria,
          notas: [
            { nombre: "NOTA I Exposición", valor: "4.20" },
            { nombre: "NOTA II Taller I", valor: "1.0" },
            { nombre: "NOTA III Taller II", valor: "2.20" },
            { nombre: "DEFINITIVA", valor: "4.4" }
          ]
        }
      ]
    },
    '3': {
      nombre: 'CORTE III',
      materias: [
        {
          nombre: "BIOLOGÍA MECÁNICA",
          imagen: imgMateria,
          notas: [
            { nombre: "NOTA I Exposición", valor: "N/A" },
            { nombre: "NOTA II Taller I", valor: "N/A" },
            { nombre: "NOTA III Taller II", valor: "N/A" },
            { nombre: "DEFINITIVA", valor: "N/A" }
          ]
        }
      ]
    }
  }
  
  const corte = cortes[corteId] || cortes['1']

  return (
    <div className="calificaciones-corte">
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="calificaciones-corte__content">
        <Link to="/calificaciones" className="calificaciones-corte__back">
          <IoArrowBack /> Volver a Calificaciones
        </Link>
        
        <div className="calificaciones-corte__header">
          <HiClipboardList className="calificaciones-corte__icon" />
          <h1>CALIFICACIONES</h1>
        </div>
        
        <div className="calificaciones-corte__student-info">
          <p>
            <span className="calificaciones-corte__label">Nombre del Estudiante:</span>
            <span className="calificaciones-corte__value">Alverto Benavidez</span>
          </p>
          <p>
            <span className="calificaciones-corte__label">Estado:</span>
            <span className="calificaciones-corte__value">Activo</span>
          </p>
        </div>
        
        <div className="calificaciones-corte__materias">
          {corte.materias.map((materia, index) => (
            <div key={index} className="calificaciones-corte__materia-card">
              <div className="calificaciones-corte__materia-header">
                <div className="calificaciones-corte__materia-imagen">
                  <img src={materia.imagen} alt={materia.nombre} />
                </div>
                <div className="calificaciones-corte__materia-titles">
                  <h2>{materia.nombre}</h2>
                  <h3>{corte.nombre}</h3>
                </div>
              </div>
              
              <div className="calificaciones-corte__notas-table">
                {materia.notas.map((nota, notaIndex) => (
                  <div key={notaIndex} className="calificaciones-corte__nota-row">
                    <span className="calificaciones-corte__nota-nombre">{nota.nombre}</span>
                    <span className={`calificaciones-corte__nota-valor ${nota.valor === 'N/A' ? 'calificaciones-corte__nota-valor--na' : ''}`}>
                      {nota.valor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


