import React from 'react'
import logo from '../Components/Assets/plant.jpg'
import { Link } from 'react-router-dom'

function shoot() {
    
}
export const Items = ({ items }) => {
    console.log(items)
    return (
        <>
            {items.map(item => (
                <Link key={item}>
                <div className='h-96 mb-10 mx-4 w-[336px] bg-white rounded-lg shadow-md p-4 flex flex-wrap justify-center hover:shadow-xl transition duration-200' onClick={shoot} >
                    <img src={logo} alt="item" className='w-72 h-72 object-contain justify-self-center' />
                    <p className='w-full text-xl font-mono font-bold px-4'>Name of Product </p>
                    </div>
                </Link>
            ))}
        </>
    )
}
