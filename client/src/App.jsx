import {Routes,Route, useLocation, useSearchParams } from 'react-router-dom'
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from './Pages/ShopCategory';
import Navbar from './Components/Navbar';

export default function App() {
    const categories = ["Animals and Pets", "Architecture", "Art and Abstract", "Cars and Vehicles", "Characters and Creatures", "Cultural Heritage and History", "Electronics and Gadgets", "Fashion and Style", "Food and Drink", "Furniture and Home", "Music", "Nature and Plants", "News and Politics", "People", "Places and Travel", "Science and Technology", "Sports and Fitness", "Weapons and Military"];
    var path = useLocation().pathname
    return (
        <>
            {!(path==='/login' || path==='/signup' || path==='/reset')&& <Navbar categories={categories}/>}
            <Routes>
                <Route path="/" element={<Shop categories={categories} />}></Route>
                <Route path="/category" element={<ShopCategory categories={categories} />}></Route>
                <Route path="/cart" element={<Cart categories={categories} />}></Route>
                <Route path="/login" element={<LoginSignup/>}></Route>
                <Route path="/signup" element={<LoginSignup/>}></Route>
                <Route path="/reset" element={<LoginSignup/>}></Route>
                <Route path="/product" element={<Product />}>
                    <Route path=":productId" element={<Product/>}></Route>
                </Route>
            </Routes>
        </>
    );
}
// http://swag-cstore.tilda.ws/