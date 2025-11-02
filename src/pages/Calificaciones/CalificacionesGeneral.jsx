import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import TablaCalificaciones from '../../components/TablaCalificaciones'
import '../../styles/Calificaciones.css'

// URLs de imágenes desde Figma
const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"
const imgIcon = "https://www.figma.com/api/mcp/asset/5ee6f504-f0bf-4276-9afd-b9345d20a6d8"

export default function CalificacionesGeneral() {
  const calificacionesBiologia = [
    { label: 'BIOLOGÍA MECÁNICA', valor: '4.5' },
    { label: 'Corte I', valor: '4.2' },
    { label: 'Corte II', valor: '4.4' },
    { label: 'Corte III', valor: 'N/A' },
  ]

  const calificacionesProgramacion = [
    { label: 'PROGRAMACIÓN III', valor: '3.8' },
    { label: 'Corte I', valor: '3.5' },
    { label: 'Corte II', valor: '4.0' },
    { label: 'Corte III', valor: 'N/A' },
  ]

  const calificacionesGestion = [
    { label: 'GESTIÓN EMPRESARIAL', valor: '4.2' },
    { label: 'Corte I', valor: '4.0' },
    { label: 'Corte II', valor: '4.4' },
    { label: 'Corte III', valor: 'N/A' },
  ]

  const calificacionesTeleco = [
    { label: 'TELECOMUNICACIONES', valor: '3.9' },
    { label: 'Corte I', valor: '3.8' },
    { label: 'Corte II', valor: '4.0' },
    { label: 'Corte III', valor: 'N/A' },
  ]

  return (
    <div className="calificaciones">
      {/* Header */}
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

      {/* Content */}
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
            <p><strong>Nombre del Estudiante:</strong> Alverto Benavidez</p>
            <p><strong>Estado:</strong> Activo</p>
          </div>

          <div className="calificaciones__tabs">
            <Link to="/calificaciones" className="calificaciones__tab calificaciones__tab--active">
              General
            </Link>
            <Link to="/calificaciones/corte-i" className="calificaciones__tab">
              Corte I
            </Link>
            <Link to="/calificaciones/corte-ii" className="calificaciones__tab">
              Corte II
            </Link>
            <Link to="/calificaciones/corte-iii" className="calificaciones__tab">
              Corte III
            </Link>
          </div>

          <TablaCalificaciones calificaciones={calificacionesBiologia} titulo="BIOLOGÍA MECÁNICA" />
          <TablaCalificaciones calificaciones={calificacionesProgramacion} titulo="PROGRAMACIÓN III" />
          <TablaCalificaciones calificaciones={calificacionesGestion} titulo="GESTIÓN EMPRESARIAL" />
          <TablaCalificaciones calificaciones={calificacionesTeleco} titulo="TELECOMUNICACIONES" />
        </div>
      </div>
    </div>
  )
}
