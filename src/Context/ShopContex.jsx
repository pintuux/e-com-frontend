import React, { createContext,useState } from "react";
import { useEffect } from "react";
// import all_product from "../component/Assests/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index < 300 ; index++){
        cart[index] = 0;

    }
    return cart;

}
const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product,setAll_product] = useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:4000/allproducts')
        .then((resp)=>resp.json())
        .then((data)=>setAll_product(data))
    if(localStorage.getItem('auth-token')){
        fetch('http://127.0.0.1:4000/getcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            },
            body:""

        })
        .then((resp)=>resp.json())
        .then((data)=>setCartItems(data))
    }

    },[])
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       if(localStorage.getItem('auth-token')){
        fetch('http://127.0.0.1:4000/addtocart',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                "Content-Type":'application/json'
            },
            body:JSON.stringify({'itemid':itemId})

        })
        .then((resp)=>resp.json())
        .then((data)=>console.log(data))

       }
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://127.0.0.1:4000/removefromcart',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                "Content-Type":'application/json'
            },
            body:JSON.stringify({'itemid':itemId})

        })
        .then((resp)=>resp.json())
        .then((data)=>console.log(data))

        }
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;