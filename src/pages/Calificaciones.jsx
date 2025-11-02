import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import AcordeonCalificaciones from '../components/AcordeonCalificaciones'
import '../styles/Calificaciones.css'
import { HiClipboardList } from 'react-icons/hi'
import { materias, calificacionesCorteI } from '../data/mockCalificaciones'

export default function Calificaciones() {
  return (
    <div className="calificaciones">
      <Header />

      <div className="calificaciones__content">
        <div className="calificaciones__header-section">
          <div className="calificaciones__title-container">
            <HiClipboardList className="calificaciones__icon" />
            <h1>CALIFICACIONES</h1>
          </div>

          <div className="calificaciones__student-info">
            <p>
              <span className="calificaciones__label">Nombre del Estudiante:</span>
              <span className="calificaciones__value">Alverto Benavidez</span>
            </p>
            <p>
              <span className="calificaciones__label">Estado:</span>
              <span className="calificaciones__value">Activo</span>
            </p>
          </div>

          <p className="calificaciones__subtitle">Calificaciones del Corte I por Materia</p>
        </div>

        <div className="calificaciones__acordeones">
          <AcordeonCalificaciones
            calificaciones={calificacionesCorteI.biologia}
            titulo={materias[0].nombre}
          />
          <AcordeonCalificaciones
            calificaciones={calificacionesCorteI.programacion}
            titulo={materias[1].nombre}
          />
          <AcordeonCalificaciones
            calificaciones={calificacionesCorteI.gestion}
            titulo={materias[2].nombre}
          />
          <AcordeonCalificaciones
            calificaciones={calificacionesCorteI.telecomunicaciones}
            titulo={materias[3].nombre}
          />
        </div>

        <div className="calificaciones__navigation">
          <Link to="/calificaciones/corte/1" className="calificaciones__nav-link">
            Ver detalles del Corte I
          </Link>
          <Link to="/calificaciones/corte/2" className="calificaciones__nav-link">
            Ver detalles del Corte II
          </Link>
          <Link to="/calificaciones/corte/3" className="calificaciones__nav-link">
            Ver detalles del Corte III
          </Link>
        </div>
      </div>
    </div>
  )
}


