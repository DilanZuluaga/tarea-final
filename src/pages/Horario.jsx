import React from 'react'
import Header from '../components/Header'
import '../styles/Horario.css'
import { BsCalendar3 } from 'react-icons/bs'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"
const imgMateria = "https://www.figma.com/api/mcp/asset/7d8473eb-a993-453c-8010-e8138a167005"

export default function Horario() {
  const clasesHoy = [
    {
      materia: "BIOLOGÍA MECÁNICA",
      aula: "AGL203",
      profesor: "CRISANTO LUQUE",
      salon: "203",
      coordinador: "MAURICIO TORRES",
      imagen: imgMateria
    },
    {
      materia: "PROGRAMACIÓN III",
      aula: "AGL303",
      profesor: "PATRICIO MARTINEZ",
      salon: "903",
      coordinador: "LUCIA GOMEZ",
      imagen: imgMateria
    }
  ]
  
  const clasesManana = [
    {
      materia: "GESTIÓN EMPRESARIAL",
      aula: "AGL203",
      profesor: "LUNA DE DIÁS",
      salon: "203",
      coordinador: "MAURICIO TORRES",
      imagen: imgMateria
    },
    {
      materia: "TELECOMUNICACIONES",
      aula: "AGL303",
      profesor: "MARIA CAMRENZA",
      salon: "903",
      coordinador: "LUCIA GOMEZ",
      imagen: imgMateria
    }
  ]

  return (
    <div className="horario">
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="horario__content">
        <div className="horario__header">
          <BsCalendar3 className="horario__icon" />
          <h1>HORARIO</h1>
        </div>
        
        <div className="horario__student-info">
          <p>
            <span className="horario__label">Nombre del Estudiante:</span>
            <span className="horario__value">Alverto Benavidez</span>
          </p>
          <p>
            <span className="horario__label">Estado:</span>
            <span className="horario__value">Activo</span>
          </p>
        </div>
        
        <div className="horario__sections">
          <div className="horario__section">
            <h2 className="horario__section-title">HOY VIERNES 22 ABRIL</h2>
            
            <div className="horario__clases">
              {clasesHoy.map((clase, index) => (
                <div key={index} className="horario__clase-card">
                  <div className="horario__clase-imagen">
                    <img src={clase.imagen} alt={clase.materia} />
                  </div>
                  <div className="horario__clase-info">
                    <h3>{clase.materia}</h3>
                    <p><strong>{clase.aula}</strong></p>
                    <p>{clase.profesor}</p>
                    <p>{clase.salon}</p>
                    <p>{clase.coordinador}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="horario__section">
            <h2 className="horario__section-title">MAÑANA SABADO 23 ABRIL</h2>
            
            <div className="horario__clases">
              {clasesManana.map((clase, index) => (
                <div key={index} className="horario__clase-card">
                  <div className="horario__clase-imagen">
                    <img src={clase.imagen} alt={clase.materia} />
                  </div>
                  <div className="horario__clase-info">
                    <h3>{clase.materia}</h3>
                    <p><strong>{clase.aula}</strong></p>
                    <p>{clase.profesor}</p>
                    <p>{clase.salon}</p>
                    <p>{clase.coordinador}</p>
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


