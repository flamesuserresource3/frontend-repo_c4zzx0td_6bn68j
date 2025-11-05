import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShowcaseCards from './components/ShowcaseCards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ShowcaseCards />
      </main>
      <Footer />
    </div>
  )
}

export default App
