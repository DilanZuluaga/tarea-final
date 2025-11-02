import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Bienvenida.css'

// Imágenes desde Figma
const imgBackgroundCity = "https://www.figma.com/api/mcp/asset/6ee58829-bbb1-4c5a-9946-66b167a45991"
const imgLogoECCI = "https://www.figma.com/api/mcp/asset/a90d5762-315d-47f3-b05d-dd3cb678a369"
const imgStudentWithLaptop = "https://www.figma.com/api/mcp/asset/3696407d-c091-4992-a985-95bc27848bb9"

export default function Bienvenida() {
  const navigate = useNavigate()

  return (
    <div className="bienvenida">
      <div className="bienvenida__background">
        <img src={imgBackgroundCity} alt="Ciudad Bogotá" className="bienvenida__background-image" />
      </div>
      
      <div className="bienvenida__container">
        <div className="bienvenida__card">
          <div className="bienvenida__logo">
            <img src={imgLogoECCI} alt="Universidad ECCI" />
          </div>
          
          <div className="bienvenida__illustration">
            <img src={imgStudentWithLaptop} alt="Estudiante con laptop" />
          </div>
          
          <button 
            className="bienvenida__button"
            onClick={() => navigate('/login')}
          >
            INICIAR SESIÓN
          </button>
        </div>
      </div>
    </div>
  )
}


