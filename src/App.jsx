import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { WhyVR, Learn, Levels, ForCompanies, Launch } from './components/Sections.jsx'
import Video from './components/Video.jsx'
import FAQ from './components/FAQ.jsx'
import Quote from './components/Quote.jsx'
import Footer from './components/Footer.jsx'
import { useIgnite } from './useIgnite.js'

export default function App() {
  useIgnite()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyVR />
        <Learn />
        <Levels />
        <Video />
        <ForCompanies />
        <Launch />
        <FAQ />
        <Quote />
      </main>
      <Footer />
    </>
  )
}
