import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import TablaCalificaciones from '../../components/TablaCalificaciones'
import '../../styles/Calificaciones.css'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"
const imgIcon = "https://www.figma.com/api/mcp/asset/5ee6f504-f0bf-4276-9afd-b9345d20a6d8"

export default function CalificacionesCorteI() {
  const calificacionesBiologia = [
    { label: 'NOTA I Exposición', valor: '4.20' },
    { label: 'NOTA II Taller I', valor: '3.80' },
    { label: 'NOTA III Taller II', valor: '4.10' },
    { label: 'DEFINITIVA CORTE I', valor: '4.03' },
  ]

  const calificacionesProgramacion = [
    { label: 'NOTA I Quiz', valor: '3.50' },
    { label: 'NOTA II Proyecto', valor: '3.20' },
    { label: 'NOTA III Examen', valor: '3.70' },
    { label: 'DEFINITIVA CORTE I', valor: '3.47' },
  ]

  const calificacionesGestion = [
    { label: 'NOTA I Caso Estudio', valor: '4.00' },
    { label: 'NOTA II Análisis', valor: '3.90' },
    { label: 'NOTA III Participación', valor: '4.10' },
    { label: 'DEFINITIVA CORTE I', valor: '4.00' },
  ]

  const calificacionesTeleco = [
    { label: 'NOTA I Laboratorio', valor: '3.80' },
    { label: 'NOTA II Problemas', valor: '3.70' },
    { label: 'NOTA III Presentación', valor: '3.90' },
    { label: 'DEFINITIVA CORTE I', valor: '3.80' },
  ]

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
            <p><strong>Nombre del Estudiante:</strong> Alverto Benavidez</p>
            <p><strong>Estado:</strong> Activo</p>
          </div>

          <div className="calificaciones__tabs">
            <Link to="/calificaciones" className="calificaciones__tab">
              General
            </Link>
            <Link to="/calificaciones/corte-i" className="calificaciones__tab calificaciones__tab--active">
              Corte I
            </Link>
            <Link to="/calificaciones/corte-ii" className="calificaciones__tab">
              Corte II
            </Link>
            <Link to="/calificaciones/corte-iii" className="calificaciones__tab">
              Corte III
            </Link>
          </div>

          <TablaCalificaciones calificaciones={calificacionesBiologia} titulo="BIOLOGÍA MECÁNICA - CORTE I" />
          <TablaCalificaciones calificaciones={calificacionesProgramacion} titulo="PROGRAMACIÓN III - CORTE I" />
          <TablaCalificaciones calificaciones={calificacionesGestion} titulo="GESTIÓN EMPRESARIAL - CORTE I" />
          <TablaCalificaciones calificaciones={calificacionesTeleco} titulo="TELECOMUNICACIONES - CORTE I" />
        </div>
      </div>
    </div>
  )
}
