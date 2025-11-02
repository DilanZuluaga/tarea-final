import React from 'react'
import Header from '../components/Header'
import '../styles/UbicacionSalones.css'
import { MdLocationOn } from 'react-icons/md'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"

export default function UbicacionSalones() {
  const salones = [
    {
      materia: "BIOLOGÍA MECÁNICA",
      profesor: "CRISANTO LUQUE",
      salon: "203",
      direccion: "Cra 10 # 19 – 64, Cl. 20 # 9-45, Bogotá",
      aula: "AGL203"
    },
    {
      materia: "PROGRAMACIÓN III",
      profesor: "CRISANTO LUQUE",
      salon: "903",
      direccion: "Cra 10 # 19 – 64, Cl. 20 # 9-45, Bogotá",
      aula: "AGL203"
    },
    {
      materia: "GESTIÓN EMPRESARIAL",
      profesor: "CRISANTO LUQUE",
      salon: "203",
      direccion: "Cra 10 # 19 – 64, Cl. 20 # 9-45, Bogotá",
      aula: "AGL203"
    },
    {
      materia: "TELECOMUNICACIONES",
      profesor: "CRISANTO LUQUE",
      salon: "303",
      direccion: "Cra 10 # 19 – 64, Cl. 20 # 9-45, Bogotá",
      aula: "AGL203"
    }
  ]

  return (
    <div className="ubicacion-salones">
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="ubicacion-salones__content">
        <div className="ubicacion-salones__header">
          <MdLocationOn className="ubicacion-salones__icon" />
          <h1>UBICACIÓN DE SALONES</h1>
        </div>
        
        <div className="ubicacion-salones__student-info">
          <p>
            <span className="ubicacion-salones__label">Nombre del Estudiante:</span>
            <span className="ubicacion-salones__value">Alverto Benavidez</span>
          </p>
          <p>
            <span className="ubicacion-salones__label">Estado:</span>
            <span className="ubicacion-salones__value">Activo</span>
          </p>
        </div>
        
        <div className="ubicacion-salones__lista">
          {salones.map((salon, index) => (
            <div key={index} className="ubicacion-salones__item">
              <div className="ubicacion-salones__item-header">
                <h2>{salon.materia}</h2>
              </div>
              
              <div className="ubicacion-salones__item-body">
                <div className="ubicacion-salones__info-row">
                  <span className="ubicacion-salones__info-label">Profesor:</span>
                  <span className="ubicacion-salones__info-value">{salon.profesor}</span>
                </div>
                
                <div className="ubicacion-salones__info-row">
                  <span className="ubicacion-salones__info-label">Salón:</span>
                  <span className="ubicacion-salones__info-value">{salon.salon}</span>
                </div>
                
                <div className="ubicacion-salones__info-row">
                  <span className="ubicacion-salones__info-label">Dirección:</span>
                  <span className="ubicacion-salones__info-value">{salon.direccion}</span>
                </div>
                
                <div className="ubicacion-salones__info-row">
                  <span className="ubicacion-salones__info-label">Aula:</span>
                  <span className="ubicacion-salones__info-value">{salon.aula}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


