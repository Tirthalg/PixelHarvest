import React from 'react'
import hero_image from '../Assets/hero.png'

const Hero = () => {

    return (
        <div className=''>
            <img src={hero_image} alt="store" className='object-cover h-screen w-full' />
        </div>
    )
}

export default Hero