import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = ({categories}) => {
    return (
        <>
            {
                categories.map(category => (
                    <div className='w-72 bg-blue-100 grow font-mono font-black text-xl  m-2 shadow-md rounded-md' key={category}>
                        <Link
                            to={{
                                pathname: "/category",
                                search: "?c="+category,
                            }}
                        >
                            <p className='w-full h-full transition duration-300 hover:shadow-xl p-5'>{category}</p>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}
