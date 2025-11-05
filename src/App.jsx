import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Gate from './components/Gate'
import Dev from './components/Dev'
import Dream from './components/Dream'

function AppShell() {
  const location = useLocation()
  const onGate = location.pathname === '/'

  // Smooth scroll restoration on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {!onGate && <Navbar />}
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
