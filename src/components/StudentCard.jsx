import React from 'react'
import '../styles/StudentCard.css'

export default function StudentCard({ studentImage, studentImageBg, name, code, status }) {
  return (
    <div className="student-card">
      <div className="student-card__avatar">
        <img 
          src={studentImageBg}
          alt={name}
          className="student-card__avatar-image"
        />
      </div>
      
      <div className="student-card__info">
        <p className="student-card__name">
          <span className="student-card__label">Nombre del Estudiante:</span>
          <span className="student-card__value">{name}</span>
        </p>
        <p className="student-card__code">
          <span className="student-card__label">Codigo:</span>
          <span className="student-card__value">{code}</span>
        </p>
        <p className="student-card__status">
          <span className="student-card__label">Estado:</span>
          <span className="student-card__value">{status}</span>
        </p>
      </div>
    </div>
  )
}
