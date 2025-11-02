import React from 'react'
import Header from '../components/Header'
import '../styles/Perfil.css'
import { BsPersonCircle } from 'react-icons/bs'

const imgStudentPhoto = "https://www.figma.com/api/mcp/asset/8805b411-0a6f-4b41-8e0d-b70fc8154b8b"

export default function Perfil() {
  return (
    <div className="perfil">
      <Header />
      
      <div className="perfil__content">
        <div className="perfil__header">
          <BsPersonCircle className="perfil__header-icon" />
          <h1>PERFIL DEL ESTUDIANTE</h1>
        </div>
        
        <div className="perfil__main">
          <div className="perfil__photo-section">
            <div className="perfil__photo">
              <img src={imgStudentPhoto} alt="Alverto Benavidez" />
            </div>
          </div>
          
          <div className="perfil__info-section">
            <div className="perfil__info-card">
              <div className="perfil__info-item">
                <span className="perfil__label">Nombre del Estudiante:</span>
                <span className="perfil__value">Alverto Benavidez</span>
              </div>
              
              <div className="perfil__info-item">
                <span className="perfil__label">Código:</span>
                <span className="perfil__value">109922</span>
              </div>
              
              <div className="perfil__info-item">
                <span className="perfil__label">Carrera:</span>
                <span className="perfil__value">Ingeniería en Sistemas</span>
              </div>
              
              <div className="perfil__info-item">
                <span className="perfil__label">Estado:</span>
                <span className="perfil__value">Activo</span>
              </div>
              
              <div className="perfil__info-item">
                <span className="perfil__label">Fecha de nacimiento:</span>
                <span className="perfil__value">22/08/2001</span>
              </div>
              
              <div className="perfil__info-item">
                <span className="perfil__label">Edad:</span>
                <span className="perfil__value">22</span>
              </div>
              
              <div className="perfil__info-item">
                <span className="perfil__label">Semestre:</span>
                <span className="perfil__value">6</span>
              </div>
              
              <div className="perfil__info-item">
                <span className="perfil__label">Promedio acumulado:</span>
                <span className="perfil__value">4.5</span>
              </div>
            </div>
            
            <div className="perfil__emergency-section">
              <h2>INFORMACIÓN DE EMERGENCIA</h2>
              
              <div className="perfil__info-card">
                <div className="perfil__info-item">
                  <span className="perfil__label">Nombre del Estudiante:</span>
                  <span className="perfil__value">Alfreda Benavidez</span>
                </div>
                
                <div className="perfil__info-item">
                  <span className="perfil__label">Fecha de nacimiento:</span>
                  <span className="perfil__value">22/08/1955</span>
                </div>
                
                <div className="perfil__info-item">
                  <span className="perfil__label">Edad:</span>
                  <span className="perfil__value">54</span>
                </div>
                
                <div className="perfil__info-item">
                  <span className="perfil__label">Parentesco:</span>
                  <span className="perfil__value">Madre</span>
                </div>
                
                <div className="perfil__info-item">
                  <span className="perfil__label">Número Telefónico:</span>
                  <span className="perfil__value">311 355 2829</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
