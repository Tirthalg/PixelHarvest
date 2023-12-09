import logo from './Assets/logotb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping ,faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { Link, useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../fb";
import { query, collection, getDocs, where } from "firebase/firestore";

const Navbar = ({ categories }) => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    

    return(
        <div className='flex navbar bg-white bg-opacity-60 p-4 justify-around fixed top-0 w-full'>
            <div className='logo flex flex-wrap'>
                <img className=' h-8' src={logo} alt="P" />
                <div className='text-slate-800 px-2 self-center text-2xl'><Link to='/'>Pixel Harvest</Link></div>
            </div>
            <ul className='flex flex-wrap text-black font-mono justify-evenly w-96 self-center'>
                <div className='transition duration-300 ease-in-out rounded-md p-2 hover:bg-sky-400 group ' aria-expanded="true" aria-haspopup="true">
                    Categories
                    <div className=" hidden absolute group-hover:block p-5 bg-gradient-to-t from-sky-200 to-slate-100 top-14 right-96 rounded-md z-30" >
                        <div className='grid grid-cols-2 gap-px z-20'>
                            {categories.map(category => (  
                                <Link key={category}
                                    to={{
                                        pathname: "/category",
                                        search: "?c="+category,
                                    }}
                                >
                                    <li className='transition duration-200 ease-in-out rounded-md p-1 hover:bg-sky-400'  >
                                        {category}
                                    </li>
                                </Link>
                                
                            ))}
                        </div> 
                    </div>
                </div>
                <li className='transition duration-300 ease-in-out rounded-full p-2  hover:bg-sky-400'>
                    <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} size='lg'/></Link>
                </li>
                {
                    user === null && 
                    <>
                        <li className='transition duration-300 ease-in-out rounded-md p-2 hover:bg-sky-400 '>
                            <Link to="/login">Login</Link>  
                        </li>
                        <li className='transition duration-300 ease-in-out rounded-md p-2 hover:bg-sky-400 '>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </>
                }
                {
                    user !== null &&
                    <>
                        <li className='transition duration-300 ease-in-out rounded-full p-2  hover:bg-sky-400 group'>
                            <Link to='/profile'><FontAwesomeIcon icon={faCircleUser} size='xl' /></Link>
                        </li>
                        <li className='justify-center'>
                            <button className='p-2 hover:bg-sky-400 rounded-lg' onClick={ logout}>
                                Logout
                            </button>
                        </li>
                        
                    </>
                }
                
            </ul>
        </div>
    )
}

export default Navbar