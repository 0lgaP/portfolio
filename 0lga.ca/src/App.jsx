import React, {lazy, Suspense } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
// import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
const Portfolio = lazy(()=>import('./components/portfolio/Portfolio'))

  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Suspense fallback={'...'}>
    <Portfolio />
    </Suspense>
    <Testimonials />
    <Contact />
    <Footer />
    </>

  )
}

export default App