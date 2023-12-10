import React from 'react'


export const Items = ({ items,parentCallback }) => {
    return (
        <>
            {items.map(item => (
                <div className='h-80 mb-10 mx-4 w-60 bg-white rounded-lg shadow-md p-4 flex flex-wrap justify-center hover:shadow-xl transition duration-200 cursor-pointer' key={item._id} onClick={() => {
                    document.getElementById('product_detail').style.display = 'flex';
                    parentCallback(item)
                }} >
                    <img src={item.image_links[0]} alt="item" className='w-56 h-56 object-contain justify-self-center bg-slate-200' />
                    <p className='w-full text-xl font-mono font-bold px-4  '>{item.item_name} </p>
                </div>
            ))}
        </>
    )
}
