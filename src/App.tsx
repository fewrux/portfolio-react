import { About } from './components/About'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'

import './scss/styles.scss'

export function App() {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <About />
        <Technologies />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
