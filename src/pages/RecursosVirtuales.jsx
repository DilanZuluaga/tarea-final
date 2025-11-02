import React from 'react'
import Header from '../components/Header'
import '../styles/RecursosVirtuales.css'
import { BiBook } from 'react-icons/bi'

// Lista de libros/recursos
const recursos = [
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  },
  {
    tipo: "LIBRO",
    titulo: "100 Años De Solidad",
    materia: "Biología Mecánica",
    profesor: "Mauricio Torres"
  }
]

export default function RecursosVirtuales() {
  return (
    <div className="recursos">
      <Header />
      
      <div className="recursos__content">
        <div className="recursos__header">
          <BiBook className="recursos__icon" />
          <h1>RECURSOS VIRTUALES</h1>
        </div>
        
        <div className="recursos__grid">
          {recursos.map((recurso, index) => (
            <div key={index} className="recursos__card">
              <div className="recursos__card-icon">
                <BiBook />
              </div>
              <div className="recursos__card-content">
                <h3>{recurso.tipo}</h3>
                <p className="recursos__card-titulo">{recurso.titulo}</p>
                <p className="recursos__card-materia">{recurso.materia}</p>
                <p className="recursos__card-profesor">{recurso.profesor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


