import React from 'react'
import '../styles/InicioDesktop.css'
import MenuButton from '../components/MenuButton'
import Header from '../components/Header'

// URLs de imágenes CORRECTAS desde Figma
const imgImage2 = "https://www.figma.com/api/mcp/asset/f5036244-62c1-4bb8-a592-54daa303adf3"
const imgImagenDeWhatsApp20250930ALas153733Bd0A809D2 = "https://www.figma.com/api/mcp/asset/766afaa4-8cb5-4ce0-bcf1-53dfc8118a3d"
const imgFrame5 = "https://www.figma.com/api/mcp/asset/4f02fd32-5c1a-4cf5-b32c-2fc289026be3"
const imgFrame6 = "https://www.figma.com/api/mcp/asset/926b59c9-eed9-4fbe-9ca4-af0b67640f5c"
const imgCapa1 = "https://www.figma.com/api/mcp/asset/69c0bd8c-65a7-40b5-ac5a-cb5e32377443"
const imgCapa2 = "https://www.figma.com/api/mcp/asset/401d2d22-b7e2-4c5a-a5d3-f1facceddb78"
const imgCapa3 = "https://www.figma.com/api/mcp/asset/b4db02f7-c7f8-4a87-9afa-341782bc4bb1"
const imgCapa4 = "https://www.figma.com/api/mcp/asset/b200bf6f-90e0-4d87-8ecb-edd532145934"
const imgCapa5 = "https://www.figma.com/api/mcp/asset/d2961351-478f-42ba-b86e-fd4f403e1124"
const imgGroup13 = "https://www.figma.com/api/mcp/asset/6632da58-64b4-4527-ad20-278afc5f893a"
const imgImage1 = "https://www.figma.com/api/mcp/asset/f727db72-a040-4c30-a50b-c7f8a6a10f58"
const imgImagenDeWhatsApp20250930ALas153733Bd0A809D1 = "https://www.figma.com/api/mcp/asset/40495f03-0cdd-4613-ac11-783870ac7417"
const imgImg = "https://www.figma.com/api/mcp/asset/3250f043-99cb-4de7-b2c2-7322a93250e9"
const imgFrame2 = "https://www.ecci.edu.co/wp-content/uploads/2025/03/logo-ecci.png"

const menuItems = [
  {
    id: 1,
    title: "Consultar horario de clases",
    icon: imgImg,
    href: "/horario"
  },
  {
    id: 2,
    title: "Recibir notificaciones académicas",
    icon: imgFrame5,
    href: "/notificaciones"
  },
  {
    id: 3,
    title: "Acceso a historial académico",
    icon: imgCapa2,
    href: "/calificaciones"
  },
  {
    id: 4,
    title: "Acceso a recursos virtuales",
    icon: imgCapa5,
    href: "/recursos"
  },
  {
    id: 5,
    title: "Consultar ubicación de salones",
    icon: imgCapa3,
    href: "/ubicacion"
  },
  {
    id: 6,
    title: "Gestión administrativa",
    icon: imgCapa1,
    href: "/administrativa"
  },
  {
    id: 7,
    title: "Ver materias inscritas y profesores",
    icon: imgFrame6,
    href: "/materias"
  },
  {
    id: 8,
    title: "Consultar calificaciones",
    icon: imgGroup13,
    href: "/calificaciones"
  }
]

export default function InicioDesktop() {
  return (
    <div className="inicio-desktop">
      <Header />
      
      <div className="inicio-desktop__content">
        <div className="inicio-desktop__left">
          <h1 className="inicio-desktop__title">PERFIL DEL ESTUDIANTE</h1>
          
          <div className="inicio-desktop__student">
            <div className="inicio-desktop__student-photo">
              <img src={imgImagenDeWhatsApp20250930ALas153733Bd0A809D2} alt="Alverto Benavidez" />
            </div>
            
            <div className="inicio-desktop__student-info">
              <p>
                <strong>Nombre del Estudiante:</strong> Alverto Benavidez
              </p>
              <p>
                <strong>Codigo:</strong> 109922
              </p>
              <p>
                <strong>Estado:</strong> Activo
              </p>
            </div>
          </div>
        </div>
        
        <div className="inicio-desktop__menu-grid">
          {menuItems.map((item) => (
            <MenuButton
              key={item.id}
              title={item.title}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
