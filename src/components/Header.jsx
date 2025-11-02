import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdNotifications } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import '../styles/Header.css'

// Logo oficial de la Universidad ECCI
const ECCI_LOGO = "https://www.ecci.edu.co/wp-content/uploads/2025/03/logo-ecci.png"

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/inicio" className="header__logo">
          <img src={ECCI_LOGO} alt="Universidad ECCI Logo" className="header__logo-img" />
        </Link>
      </div>
      
      <div className="header__icons">
        <button className="header__icon-btn" onClick={() => alert('Correo')}>
          <MdEmail />
        </button>
        <Link to="/notificaciones" className="header__icon-btn">
          <IoMdNotifications />
        </Link>
        <button className="header__icon-btn">
          <HiMenu />
        </button>
      </div>
    </header>
  )
}
