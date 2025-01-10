

import Hero from './components/Hero.jsx'
import Testi from './components/Testimonials.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FeatCard from './components/Features-Card.jsx'
import Team from './components/Team.jsx'


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <FeatCard/>
      <Testi />
      <Team />
      <Contact />
      <Footer/>
      
    </div>
  )
}

export default App
