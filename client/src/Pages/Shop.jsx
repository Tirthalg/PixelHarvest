import React from 'react'
import Hero from '../Components/ShopComp/Hero'
import { Items } from '../Components/Items'
import { Categories } from '../Components/ShopComp/Categories';
import { About } from '../Components/ShopComp/About';
import { Footer } from "../Components/Footer";
import { useState, useEffect } from 'react';
import ProductDetail from '../Components/ProductDetail';

const Shop = ({categories}) => {
    const newitems_url = 'http://localhost:8080/get_items'
    const [newit,setNew] = useState([])
    const fetchItems = async () => {
        const newitems = await fetch(newitems_url);
        const d = await newitems.json();
        return setNew(d);
    }
    useEffect(() => {
        fetchItems()
    }, [])
    const [product,setProduct] = useState({
        item_name: '',
        image_links: [''],
        model_link: '',
        category: '',
        description: '',
        timestamp: '',
      })
    const handleCallback = (item) => {
        setProduct(item)
    }
    return (
        <>
            <Hero />
            <ProductDetail data={product}/>

            <div id='new' className='flex flex-wrap justify-around bg-gradient-to-b from-blue-100 to-slate-50 py-10'>
                <p className='ml-10 my-5 text-3xl w-full logo'>New</p>
                <Items items={newit} parentCallback = {handleCallback} />
            </div>
            <div id='categories' className='flex flex-wrap justify-around bg-slate-50 pb-10 px-10'>
                <p className='text-3xl w-full logo mb-5'>Categories</p>
                <Categories categories={categories} />
            </div>
            <div className='h-screen bg-gradient-to-br from-black to-slate-900 p-20 flex flex-wrap text-white text-justify justify-around '>
                <p className='text-4xl  logo w-full'>Unlock Limitless Creativity with Pixel Harvest!</p>
                <p className='font-mono text-lg w-96 m-5'>Welcome to a world where your creative visions come to life effortlessly. At Pixel Harvest, we're not just offering 3D assets; we're providing you with a gateway to unparalleled artistic possibilities. Immerse yourself in our carefully curated collection of high-quality 3D models, each meticulously crafted to elevate your projects. Whether you're a seasoned professional or just beginning your journey in 3D design, our store is your go-to destination for premium assets that effortlessly blend artistry and functionality.
                </p>
                <p className='text-lg font-mono w-96 m-5'>
                Why choose Pixel Harvest? It's not just about the assets; it's about a commitment to excellence. Our solo creator ensures that every model meets the highest standards, ensuring your satisfaction with every purchase. Experience the seamless integration of stunning details and flawless functionality, giving you the freedom to focus on what you do best – creating.
                <br />
                <br />
                 Your masterpiece awaits – make it extraordinary with Pixel Harvest.
                </p>
                <div className='w-96'></div>
            </div>
            <About />    
            <Footer/>
        </>
    )
}

export default Shop