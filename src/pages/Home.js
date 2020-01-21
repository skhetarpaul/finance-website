import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Carousel from '../components/carousel'
import {carouselSlidesData} from '../components/carousel'
import StyledHero from '../components/StyledHero'
import imgFooter from '../images2/coins.jpg'

export default function Home() {
    return (
        <>
            <Hero hero= "defaultHero">
                <Banner title = "banking with trust" subtitle = "experience the future of financial innovation here">
                    <Link to ="/services" className = "btn-primary">Our services</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <Carousel  slides={carouselSlidesData}/>
            <section className = "container">
                <StyledHero img = {imgFooter} >
                    <Banner title = "Want to know more?" subtitle = "Samrat Finance Banking, a name of trust">
                        <Link to ="/signup" className = "btn-primary">Get in touch</Link>
                    </Banner>
                </StyledHero>
            </section>
            
        </>
        
    )
}
