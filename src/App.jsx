import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Gate from './components/Gate'
import Dev from './components/Dev'
import Dream from './components/Dream'

function AppShell() {
  const location = useLocation()
  const showNavbar = useMemo(() => location.pathname !== '/', [location.pathname])

  return (
    <div className="min-h-screen">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Gate />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/dream" element={<Dream />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
