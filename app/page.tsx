import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Research } from './components/Research'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Research />
      <FAQ />
      <Footer />
    </>
  )
}
