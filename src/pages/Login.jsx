import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

// Imagen de fondo desde Figma
const imgBackgroundCity = "https://www.figma.com/api/mcp/asset/68816b71-5991-46df-ad04-8e4bfbe2b77b"
const imgLogoECCI = "https://www.figma.com/api/mcp/asset/561ebf14-1e18-4134-85ed-4d3191a3a6ea"

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Por ahora, cualquier login es válido (puedes agregar validación después)
    if (email && password) {
      navigate('/inicio')
    }
  }

  return (
    <div className="login">
      <div className="login__background">
        <img src={imgBackgroundCity} alt="Ciudad Bogotá" className="login__background-image" />
      </div>
      
      <div className="login__container">
        <div className="login__card">
          <div className="login__logo">
            <img 
              src={imgLogoECCI}
              alt="ECCI Logo" 
            />
          </div>
          
          <form className="login__form" onSubmit={handleSubmit}>
            <h2 className="login__title">¡INGRESA TUS DATOS!</h2>
            
            <div className="login__field">
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            
            <div className="login__field">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            
            <button type="submit" className="login__button">
              INICIAR SESIÓN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
