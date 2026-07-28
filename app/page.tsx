import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Writing } from './components/Writing'

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Writing />
      <Research />
      <About />
    </>
  )
}
