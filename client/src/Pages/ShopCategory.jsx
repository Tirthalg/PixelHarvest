import React from 'react'
import {  useSearchParams } from 'react-router-dom'
import { Footer } from '../Components/Footer';
import head from '../Components/Assets/head.png'
import {Items} from '../Components/Items'
const ShopCategory = () => {
    let params = useSearchParams();
    return (
        <>
            <img src={head} alt="header" className=' object-cover w-full h-96' />
            <div className='bg-gradient-to-t from-sky-200 to-slate-100 text-black w-full px-5 py-10 flex flex-wrap justify-evenly'>
                <p className='text-2xl logo w-full mx-10 mb-10'>
                    {params[0].get('c')}
                </p>
                <Items items={["", "", "", "","", "", "", "","", "", "", "","", "", "", "",]} />
                
            </div>
            <Footer/>
        </>
    )
}

export default ShopCategory