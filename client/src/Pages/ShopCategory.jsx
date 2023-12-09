import React, { useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
import { Footer } from '../Components/Footer';
import head from '../Components/Assets/head.png'
import {Items} from '../Components/Items'
const ShopCategory = () => {
    let params = useSearchParams();
    const category = params[0].get('c');
    const url = `http://localhost:8080/get_category_items?category=${category}`
    const [catItems, setItems] = useState([])
    const fetchItems = async () => {
        const items = await fetch(url)
        const data = await items.json()

        return setItems(data)
    }
    useEffect(() => {
        fetchItems()
    },[])


    return (
        <>
            <img src={head} alt="header" className=' object-cover w-full h-96' />
            <div className='bg-gradient-to-t from-sky-200 to-slate-100 text-black w-full px-5 py-10 flex flex-wrap justify-evenly'>
                <p className='text-2xl logo w-full mx-10 mb-10'>
                    {category}
                </p>
                <Items items={catItems} />
                
            </div>
            <Footer/>
        </>
    )
}

export default ShopCategory