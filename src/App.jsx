import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Bienvenida from './pages/Bienvenida'
import Login from './pages/Login'
import InicioDesktop from './pages/InicioDesktop'
import Perfil from './pages/Perfil'
import Calificaciones from './pages/Calificaciones'
import CalificacionesCorte from './pages/CalificacionesCorte'
import Horario from './pages/Horario'
import Notificaciones from './pages/Notificaciones'
import RecursosVirtuales from './pages/RecursosVirtuales'
import UbicacionSalones from './pages/UbicacionSalones'
import MateriasYProfesores from './pages/MateriasYProfesores'
import GestionAdministrativa from './pages/GestionAdministrativa'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<InicioDesktop />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/calificaciones" element={<Calificaciones />} />
        <Route path="/calificaciones/corte/:corteId" element={<CalificacionesCorte />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/recursos" element={<RecursosVirtuales />} />
        <Route path="/ubicacion" element={<UbicacionSalones />} />
        <Route path="/materias" element={<MateriasYProfesores />} />
        <Route path="/administrativa" element={<GestionAdministrativa />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App
