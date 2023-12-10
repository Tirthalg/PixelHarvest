import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ProductDetail = ({data}) => {
    return (
        <div id='product_detail'
            className="place-content-center h-screen w-screen hidden fixed left-0 top-0 flex-wrap  bg-opacity-40 bg-white ">
            <div  className='bg-slate-900 text-white w-10/12 rounded-lg flex flex-wrap justify-evenly p-10 opacity-100'>
                <button className='absolute right-[11%] top-[20%]'
                    onClick={() => { document.getElementById("product_detail").style.display = 'none' }}>
                    <FontAwesomeIcon icon={faXmark} size='xl'/>
                </button>
                <div className='w-96 h-96 bg-slate-300 justify-center items-center flex flex-wrap snap-mandatory snap-y overflow-scroll'>
                    {data.image_links.map(item => (
                        <div className='snap-center'>
                            <img src={item} alt="Error loading" key={item}/>
                        </div>
                    ))}
                </div>
                <div className='w-96 font-mono '>
                    <p className='logo text-3xl my-2'>{data.item_name}</p>
                    <Link reloadDocument to={{pathname: "/category",search: "?c="+data.category}}>{data.category}</Link>
                    <p className='text-lg my-2'> Description</p>
                    <hr className='h-[1px] bg-slate-400'/>
                    <p className='p-5'>{data.description}</p>
                    <Link to={data.model_link}>
                        <div className='w-72 p-2 my-10 bg-white text-black rounded-lg text-center text-xl' >Download</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail