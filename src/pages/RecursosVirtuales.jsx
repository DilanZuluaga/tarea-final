import React from 'react'
import Header from '../components/Header'
import '../styles/RecursosVirtuales.css'
import { BiBook } from 'react-icons/bi'

const imgFrame2 = "https://www.figma.com/api/mcp/asset/eedd4e0f-73aa-4ec0-a2cd-ef8097563442"
const imgImage1 = "https://www.figma.com/api/mcp/asset/b1b9168a-820a-4612-8233-27ac929197c2"
const imgImage2 = "https://www.figma.com/api/mcp/asset/27d69c35-157b-40e6-9683-e3d298cc8d79"

// Imágenes de recursos desde Figma
const recursos = [
  {
    nombre: "Biblioteca Virtual",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/41793cf6-7a77-45bb-9d42-07815f4366a1"
  },
  {
    nombre: "Plataforma Moodle",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/6d6f26ac-45f7-4192-82dc-da66eebafe8b"
  },
  {
    nombre: "Recursos Académicos",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/86028abb-33b8-46fe-9329-74a151004785"
  },
  {
    nombre: "Videos Educativos",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/41c11d76-c4fd-434b-b7f1-3ccd7b8c4410"
  },
  {
    nombre: "Material de Estudio",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/b8bbbb6e-5196-4eb9-8c85-dbc6e4f16d0e"
  },
  {
    nombre: "Laboratorios Virtuales",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/a4ba65bb-2bf8-42b1-9316-d93ac445beee"
  },
  {
    nombre: "Bases de Datos",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/8abcd4c6-879e-4c2f-a4bb-953b45d7ab34"
  },
  {
    nombre: "Revistas Científicas",
    url: "#",
    imagen: "https://www.figma.com/api/mcp/asset/5ee6f504-f0bf-4276-9afd-b9345d20a6d8"
  }
]

export default function RecursosVirtuales() {
  return (
    <div className="recursos">
      <Header imgFrame2={imgFrame2} imgImage1={imgImage1} imgImage2={imgImage2} />
      
      <div className="recursos__content">
        <div className="recursos__header">
          <BiBook className="recursos__icon" />
          <h1>RECURSOS VIRTUALES</h1>
        </div>
        
        <div className="recursos__grid">
          {recursos.map((recurso, index) => (
            <a 
              key={index} 
              href={recurso.url} 
              className="recursos__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="recursos__card-image">
                <img src={recurso.imagen} alt={recurso.nombre} />
              </div>
              <div className="recursos__card-content">
                <h3>{recurso.nombre}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


