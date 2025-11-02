import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdNotifications } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import '../styles/Header.css'

export default function Header({ imgFrame2, imgImage1, imgImage2 }) {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/inicio" className="header__logo">
          <img src={imgFrame2} alt="ECCI Logo" className="header__logo-bg" />
          <div className="header__logo-avatar">
            <img src={imgImage2} alt="Student" className="header__avatar-image" />
          </div>
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
