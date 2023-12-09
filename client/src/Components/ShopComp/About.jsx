import React from 'react'
import model from "../Assets/model.png"
import plant from '../Assets/plant.jpg'
import { Link } from 'react-router-dom'
export const About = () => {
    return (
        <>
            <div className='flex flex-wrap bg-gradient-to-b from-blue-100 to-slate-50  p-20'>
                <div className='bg-transparent font-mono w-1/2 px-10 text-justify self-center text-lg leading-loose'>
                    <p className='text-4xl logo mb-1'>Looking For Custom 3D Models?</p>
                    <p className=''>Transform your ideas into stunning reality with our custom 3D modeling services. Elevate your projects with custom 3D models crafted just for you. <Link className='text-blue-800'
                        onClick={(e) => {e.preventDefault() ; window.location = 'mailto:inertbutterfly@gmail.com'}}>
                            Contact Me
                    </Link>, and let's embark on a journey of personalized design!</p>
                </div>
                <div className='canvas w-1/2'>
                    <img src={model} alt="plant" className='object-cover w-full '/>
                </div>
            </div>
            <div className='flex flex-wrap bg-gradient-to-br from-black to-slate-950 p-20'>
                <div className='canvas w-1/2'>
                    <img src={plant} alt="plant" className='object-cover w-full '/>
                </div>
                <div className='bg-transparent text-white font-mono w-1/2 p-20 text-justify self-center text-lg leading-loose'>
                    <p className='text-4xl logo mb-1'>About</p>
                    <p>Hello, fellow 3D enthusiasts! I'm Tirthal, the creator and curator behind 'Pixel Harvest'. This space is not just an online store; it's a testament to my passion for 3D modeling and a commitment to delivering top-notch assets to fuel your creative projects.Each asset available for purchase has been personally created and vetted by me. </p>
                </div>
            </div>
        </>

    )
}
