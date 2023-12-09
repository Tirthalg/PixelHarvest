import React from 'react'
import plant from '../Assets/plant.jpg'
export const About = () => {
    return (
      <div className='flex flex-wrap bg-gradient-to-br from-black to-slate-950 p-20'>
        <div className='canvas w-1/2'>
          <img src={plant} alt="plant" className='object-cover w-full '/>
          </div>
          <div className='bg-transparent text-white font-mono w-1/2 p-20 text-justify self-center text-lg leading-loose'>
              <p className='text-4xl logo mb-1'>About</p>
              <p>Hello, fellow 3D enthusiasts! I'm Tirthal, the creator and curator behind 'Pixel Harvest'. This space is not just an online store; it's a testament to my passion for 3D modeling and a commitment to delivering top-notch assets to fuel your creative projects.Each asset available for purchase has been personally created and vetted by me. </p>
        </div>
      </div>
    )
}
