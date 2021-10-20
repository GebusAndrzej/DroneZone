import React from 'react'
import About from './About/About'
import Drone from './Drone/Drone'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Map from './Map/Map'
import Newsletter from './Newsletter/Newsletter'
import Pics from './Pics/Pics'

const LandingPage = () => {
    return (
        <>
            <Home></Home>
            <About></About>
            <Drone></Drone>
            <Pics></Pics>
            <Newsletter></Newsletter>
            <Map></Map>
            <Footer></Footer>
        </>
    )
}

export default LandingPage
