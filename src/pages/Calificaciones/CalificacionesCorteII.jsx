import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import AcordeonCalificaciones from '../../components/AcordeonCalificaciones'
import '../../styles/Calificaciones.css'
// Mock data importado desde archivo centralizado
import { calificacionesCorteII, estudianteInfo } from '../../data/mockCalificaciones'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"
const imgIcon = "https://www.figma.com/api/mcp/asset/5ee6f504-f0bf-4276-9afd-b9345d20a6d8"

export default function CalificacionesCorteII() {
  // Ahora usando datos del mock centralizado
  const calificacionesBiologia = calificacionesCorteII.biologia
  const calificacionesProgramacion = calificacionesCorteII.programacion
  const calificacionesGestion = calificacionesCorteII.gestion
  const calificacionesTeleco = calificacionesCorteII.telecomunicaciones

  return (
    <div className="calificaciones">
      <header className="calificaciones__header">
        <div className="calificaciones__header-container">
          <div className="calificaciones__header-logo">
            <img src={imgFrame2} alt="Header" />
          </div>
          <div className="calificaciones__header-profile">
            <img src={imgImage2} alt="Perfil" />
          </div>
          <div className="calificaciones__header-icons">
            <svg viewBox="0 0 29 20" fill="none"><path d="M0 0h29v20H0z" fill="currentColor"/></svg>
            <svg viewBox="0 0 23 28" fill="none"><path d="M0 0h23v28H0z" fill="currentColor"/></svg>
          </div>
        </div>
      </header>

      <div className="calificaciones__content">
        <div className="calificaciones__back-button">
          <Link to="/" className="calificaciones__link-back">
            <FiArrowLeft size={24} />
            <span>Volver</span>
          </Link>
        </div>

        <div className="calificaciones__card">
          <div className="calificaciones__title-section">
            <img src={imgIcon} alt="Calificaciones" className="calificaciones__icon" />
            <h1 className="calificaciones__title">CALIFICACIONES</h1>
          </div>

          <div className="calificaciones__student-info">
            <p><strong>Nombre del Estudiante:</strong> {estudianteInfo.nombre}</p>
            <p><strong>Estado:</strong> {estudianteInfo.estado}</p>
          </div>

          <div className="calificaciones__tabs">
            <Link to="/calificaciones" className="calificaciones__tab">
              General
            </Link>
            <Link to="/calificaciones/corte-i" className="calificaciones__tab">
              Corte I
            </Link>
            <Link to="/calificaciones/corte-ii" className="calificaciones__tab calificaciones__tab--active">
              Corte II
            </Link>
            <Link to="/calificaciones/corte-iii" className="calificaciones__tab">
              Corte III
            </Link>
          </div>

          <AcordeonCalificaciones calificaciones={calificacionesBiologia} titulo="BIOLOGÍA MECÁNICA - CORTE II" />
          <AcordeonCalificaciones calificaciones={calificacionesProgramacion} titulo="PROGRAMACIÓN III - CORTE II" />
          <AcordeonCalificaciones calificaciones={calificacionesGestion} titulo="GESTIÓN EMPRESARIAL - CORTE II" />
          <AcordeonCalificaciones calificaciones={calificacionesTeleco} titulo="TELECOMUNICACIONES - CORTE II" />
        </div>
      </div>
    </div>
  )
}

