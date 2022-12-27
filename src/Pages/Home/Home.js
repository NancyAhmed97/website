import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Gap from '../../Components/Gap/Gap'
import Navbar from '../../Components/Navbar/Navbar'
import Offer from '../../Components/Offer/Offer'
import Providers from '../../Components/Providers/Providers'

function Home() {
    return (
        <div>
            <Navbar/>
            <Gap/>
            <Offer/>
            <Providers/>
            <Footer />
        </div>
    )
}

export default Home
