import React ,{useState}from "react";
import './Popular.css';
// import data_product from '../Assests/data'
import Item from "../Item/Item";
import { useEffect } from "react";
const Popular = ()=>{
    const [popularProduct,setPopularProduct] = useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:4000/popularinwomen')
        .then((resp)=>resp.json())
        .then((data)=>setPopularProduct(data))
    },[])
    return(
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProduct.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default Popular;