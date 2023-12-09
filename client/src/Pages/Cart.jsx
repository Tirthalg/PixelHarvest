import React from 'react'
import { Items } from '../Components/Items'
import {Footer} from '../Components/Footer'

const Cart = () => {
    const n = ["1","2","3","4"];
    return (
        <>
            <div className='flex flex-wrap bg-slate-950'>
        
                <div className='bg-gradient-to-br from-sky-50 to-slate-100 flex flex-wrap px-4 py-24 justify-around w-9/12'>
                    <p className='font-black text-2xl w-full px-20 py-6'>Your Order</p>
                    <Items items={n} />        
                </div>
                <div className='px-20 bg-transparent  w-3/12 text-white fixed right-0 top-48 z-0'>
                    <p className='font-black text-2xl mb-10'>Total : $10</p>
                    <form action="submit" method="post" >
                        <button type="submit" className='border-2 p-4 rounded-lg w-full text-black font-black bg-white '>Checkout</button>
                    </form>
                </div> 
            </div>
            <Footer/>
        </>
    )
}

export default Cart