import React from 'react'
import {Link} from 'react-router-dom'
export const Footer = () => {
    return (
        <div className='bg-slate-950 text-white p-20 flex flex-wrap justify-around'>
            <div className=' w-1/12'>
                <ul>
                    <li className='text-sky-400 logo text-lg p-2'>Catalog</li>
                    <Link to="/#new">
                        <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                            New
                        </li>
                    </Link>
                    <Link to="/#categories">
                        <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                            Categories
                        </li>
                    </Link>
                    
                </ul>
            </div>
            <div className='w-1/12'>
                <ul>
                    <li className='text-sky-400 logo text-lg p-2'>Information</li>
                    <Link to="/About">
                        <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                            About
                        </li>
                    </Link>
                    
                </ul>
            </div>
            <div className='w-3/12'>
                <ul>
                    <li className='text-sky-400 text-3xl p-2 logo'>
                        <Link to='/'>Pixel Harvest</Link>
                    </li>
                    <Link onClick={(e) => { e.preventDefault(); window.location = 'mailto:inertbutterfly@gmail.com' }}>
                        <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                            Contact Me
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
