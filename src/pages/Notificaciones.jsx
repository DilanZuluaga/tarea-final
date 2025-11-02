import React from 'react'
import Header from '../components/Header'
import '../styles/Notificaciones.css'
import { IoNotificationsSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"

export default function Notificaciones() {
  const notificaciones = [
    {
      fecha: "MIERCOLES 20 ABRIL",
      items: [
        {
          tipo: "nota",
          titulo: "NOTA ACTUALIZADA",
          subtitulo: "BIOLOGÍA MECÁNICA",
          autor: "MAURICIO TORRES"
        },
        {
          tipo: "nota",
          titulo: "NOTA ACTUALIZADA",
          subtitulo: "CRISANTO LUQUE",
          autor: "903 LUCIA GOMEZ"
        }
      ]
    },
    {
      fecha: "LUNES 19 ABRIL",
      items: [
        {
          tipo: "correo",
          titulo: "CORREO RECIBIDO",
          subtitulo: "LUCIA GOMEZ",
          autor: "TELECOMUNICACIONES"
        },
        {
          tipo: "correo",
          titulo: "CORREO RECIBIDO",
          subtitulo: "MAURICIO TORRES",
          autor: "GESTIÓN EMPRESARIAL"
        }
      ]
    }
  ]

  return (
    <div className="notificaciones">
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="notificaciones__content">
        <div className="notificaciones__header">
          <IoNotificationsSharp className="notificaciones__icon" />
          <h1>NOTIFICACIONES</h1>
        </div>
        
        <div className="notificaciones__student-info">
          <p>
            <span className="notificaciones__label">Nombre del Estudiante:</span>
            <span className="notificaciones__value">Alverto Benavidez</span>
          </p>
          <p>
            <span className="notificaciones__label">Estado:</span>
            <span className="notificaciones__value">Activo</span>
          </p>
        </div>
        
        <div className="notificaciones__lista">
          {notificaciones.map((grupo, index) => (
            <div key={index} className="notificaciones__grupo">
              <h2 className="notificaciones__fecha">{grupo.fecha}</h2>
              
              <div className="notificaciones__items">
                {grupo.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="notificaciones__item">
                    <div className="notificaciones__item-icon">
                      {item.tipo === 'correo' ? (
                        <MdEmail />
                      ) : (
                        <IoNotificationsSharp />
                      )}
                    </div>
                    <div className="notificaciones__item-content">
                      <h3>{item.titulo}</h3>
                      <p>{item.subtitulo}</p>
                      <p>{item.autor}</p>
                    </div>
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


