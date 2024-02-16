import React from "react";
import './NewCollection.css';
// import new_collection from '../Assests/new_collections'
import Item from "../Item/Item";
import { useState } from "react";
import { useEffect } from "react";
const NewCollection = () =>{
    const [new_collection, setNew_collection] = useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:4000/newcollections')
        .then((resp)=>resp.json())
        .then((data)=>setNew_collection(data));
    },[])
    return(
        <div className="new-collections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })}
            </div>
        </div>
    )
}
export default NewCollection;