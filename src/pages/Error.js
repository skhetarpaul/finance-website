import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Error() {
    //return <Hero />
    return (
        <Hero>
            <Banner title = "404" subtitle = "Nothing found on this address">
                <Link to="/" className = "btn-primary">Return to Home</Link>
            </Banner>
        </Hero>
    )
}
