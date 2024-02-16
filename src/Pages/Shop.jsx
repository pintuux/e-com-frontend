import React from "react";
import Hero from "../component/Hero/Hero";
import Popular from "../component/Popular/Popular.jsx";
import Offers from "../component/Offers/Offers.jsx";
import NewCollection from "../component/NewCollection/NewCollection.jsx";
import NewsLetter from "../component/NewsLetter/NewsLetter.jsx";
const Shop = () =>{
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}
export default Shop;