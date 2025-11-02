import React from 'react'
import Header from '../components/Header'
import '../styles/Horario.css'
import { BsCalendar3 } from 'react-icons/bs'

// Imágenes de las clases - Usando biologia.png local (correcto) y temporalmente Freepik para las demás
const imgBiologia = "/assets/horario/biologia.png"
const imgProgramacion = "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
const imgGestion = "https://img.freepik.com/free-vector/business-team-working-cogwheel-mechanism-together_74855-6667.jpg"
const imgTelecomunicaciones = "https://img.freepik.com/free-vector/customer-service-concept-illustration_114360-1919.jpg"

export default function Horario() {
  const clasesHoy = [
    {
      materia: "BIOLOGÍA MECÁNICA",
      aula: "AGL203",
      profesor: "CRISANTO LUQUE",
      salon: "203",
      coordinador: "MAURICIO TORRES",
      imagen: imgBiologia
    },
    {
      materia: "PROGRAMACIÓN III",
      aula: "AGL303",
      profesor: "PATRICIO MARTINEZ",
      salon: "903",
      coordinador: "LUCIA GOMEZ",
      imagen: imgProgramacion
    }
  ]
  
  const clasesManana = [
    {
      materia: "GESTIÓN EMPRESARIAL",
      aula: "AGL203",
      profesor: "LUNA DE DIÁS",
      salon: "203",
      coordinador: "MAURICIO TORRES",
      imagen: imgGestion
    },
    {
      materia: "TELECOMUNICACIONES",
      aula: "AGL303",
      profesor: "MARIA CAMRENZA",
      salon: "903",
      coordinador: "LUCIA GOMEZ",
      imagen: imgTelecomunicaciones
    }
  ]

  return (
    <div className="horario">
      <Header />
      
      <div className="horario__content">
        <div className="horario__left">
          <div className="horario__header">
            <BsCalendar3 className="horario__icon" />
            <h1>HORARIO</h1>
          </div>
          
          <div className="horario__student-info">
            <p>
              <strong>Nombre del Estudiante:</strong> Alverto Benavidez
            </p>
            <p>
              <strong>Estado:</strong> Activo
            </p>
          </div>
        </div>
        
        <div className="horario__right">
          <div className="horario__section">
            <h2 className="horario__section-title">HOY VIERNES 22 ABRIL</h2>
            
            {clasesHoy.map((clase, index) => (
              <div key={index} className="horario__clase-card">
                <div className="horario__clase-imagen">
                  <img src={clase.imagen} alt={clase.materia} />
                </div>
                <div className="horario__clase-info">
                  <h3>{clase.materia}</h3>
                  <p>{clase.aula}</p>
                  <p>{clase.profesor} {clase.salon}</p>
                  <p>{clase.coordinador}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="horario__section">
            <h2 className="horario__section-title">MAÑANA SABADO 23 ABRIL</h2>
            
            {clasesManana.map((clase, index) => (
              <div key={index} className="horario__clase-card">
                <div className="horario__clase-imagen">
                  <img src={clase.imagen} alt={clase.materia} />
                </div>
                <div className="horario__clase-info">
                  <h3>{clase.materia}</h3>
                  <p>{clase.aula}</p>
                  <p>{clase.profesor} {clase.salon}</p>
                  <p>{clase.coordinador}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


