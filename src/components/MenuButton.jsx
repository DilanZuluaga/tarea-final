import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MenuButton.css'

export default function MenuButton({ title, icon, href }) {
  return (
    <Link to={href} className="menu-button">
      <div className="menu-button__background"></div>
      <div className="menu-button__content">
        <div className="menu-button__icon">
          <img src={icon} alt={title} />
        </div>
        <span className="menu-button__text">{title}</span>
      </div>
    </Link>
  )
}
