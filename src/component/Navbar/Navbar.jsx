import React, { useContext, useState,useRef } from "react";
import './Navbar.css';
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContex";
import nav_dropdown from '../Assests/nav_dropdown.png';

const Navbar = ()=>{
    const [menu, setMenu] = useState('');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return(
    <>
    <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img src={nav_dropdown} alt="" onClick={dropdown_toggle} className="nav-dropdown" />
            <ul className="nav-menu" ref={menuRef}>
                <li onClick={()=>{setMenu("shop")}}><Link to ='/shop' className="link-item"> Shop</Link>  {menu === 'shop'? <hr/>: <></>}</li >
                <li onClick={()=>{setMenu('mens')}}> <Link to ='/mens' className="link-item"> Men</Link>  {menu === 'mens'? <hr/>: <></>}</li >
                <li onClick={()=>{setMenu('womens')}}> <Link to ='/womens' className="link-item"> Women</Link>  {menu === 'womens'? <hr/>: <></>}</li >
                <li onClick={()=>{setMenu('kids')}}> <Link to ='/kids' className="link-item"> Kids</Link>  {menu === 'kids'? <hr/>: <></>}</li >
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');
            window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link> }
               
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
        <Outlet/>
        
        
    </>
        
    )
}
export default Navbar;