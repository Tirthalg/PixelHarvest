import React from 'react'
import {Link} from 'react-router-dom'
export const Footer = () => {
    return (
        <div className='bg-slate-950 text-white p-20 flex flex-wrap justify-around'>
            <div className=' w-1/12'>
                <ul>
                    <li className='text-sky-400 logo text-lg p-2'>Catalog</li>
                    <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                        <Link to="/">New</Link>
                    </li>
                    <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                        <Link to="/">Categories</Link>
                    </li>
                    <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                        <Link to="/">Bestsellers</Link>
                    </li>
                </ul>
            </div>
            <div className='w-1/12'>
                <ul>
                    <li className='text-sky-400 logo text-lg p-2'>Information</li>
                    <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                        <Link to="/About">About</Link>
                    </li>
                    <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                        <Link to="/Terms">Terms</Link>
                    </li>
                </ul>
            </div>
            <div className='w-3/12'>
                <ul>
                    <li className='text-sky-400 text-3xl p-2 logo'>
                        <Link to='/'>Pixel Harvest</Link>
                    </li>
                    <li className='transition duration-200 ease-in-out rounded-md p-2 hover:bg-sky-400'>
                        <Link to='javascript:void(0)'
                            onClick={() => window.location = 'mailto:inertbutterfly@gmail.com'}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
