import React from 'react'
import Cards from '../cards/Cards'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import NavbarP from '../navbarP/navbarP'


const Home = () => {
    return (
        <>
            <NavbarP />
            <Hero />
            <Cards />
            <Footer />
        </>
    )
}

export default Home
