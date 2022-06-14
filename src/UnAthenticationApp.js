import React from 'react'
import Navbar from './components/navbar/Navbar'
import Img from "./assets/images/img.png"
import Container from './components/wrapperSignInOut/Container'

const UnAthenticationApp = () => {
    return (
        <div >
            <Navbar />
            <div className="un-auth-content">
                <img src={Img} alt="img" />
                <Container/>
            </div>

        </div>
    )
}

export default UnAthenticationApp