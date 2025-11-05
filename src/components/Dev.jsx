import Hero from './Hero'
import ShowcaseCards from './ShowcaseCards'
import Footer from './Footer'

export default function Dev() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main>
        <Hero />
        <ShowcaseCards />
      </main>
      <Footer />
    </div>
  )
}
