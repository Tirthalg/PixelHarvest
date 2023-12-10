import {Routes,Route, useLocation } from 'react-router-dom'
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from './Pages/ShopCategory';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';

export default function App() {
    const categories = ["All","Animals and Pets", "Architecture", "Art and Abstract", "Cars and Vehicles", "Characters and Creatures", "Cultural Heritage and History", "Electronics and Gadgets", "Fashion and Style", "Food and Drink", "Furniture and Home", "Music", "Nature and Plants", "News and Politics", "People", "Places and Travel", "Science and Technology", "Sports and Fitness", "Weapons and Military"];
    var path = useLocation().pathname

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
      if (hash === '') {
        window.scrollTo(0, 0);
      }
      else {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView();
          }
        }, 0);
      }
    }, [pathname, hash, key]); 
    
    return (
        <>
            {!(path==='/login' || path==='/signup' || path==='/reset')&& <Navbar categories={categories}/>}
            <Routes >
                <Route path="/" element={<Shop categories={categories}/>}></Route>
                <Route path="/category" element={<ShopCategory categories={categories} />}></Route>
                <Route path="/cart" element={<Cart categories={categories} />}></Route>
                <Route path="/login" element={<LoginSignup/>}></Route>
                <Route path="/signup" element={<LoginSignup/>}></Route>
                <Route path="/reset" element={<LoginSignup/>}></Route>
                
            </Routes>
        </>
    );
}
// http://swag-cstore.tilda.ws/