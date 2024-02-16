import React, { useContext } from "react";
// import ShopCategory from "./ShopCategory";
import { useParams } from "react-router-dom";
import Breadcrums from "../component/Breadcrums/Breadcrums";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import { ShopContext } from "../Context/ShopContex";
import RelatedProduct from "../component/RelatedProduct/RelatedProduct";
import DescriptionBox from "../component/DiscriptionBox/DescriptionBox";
const Product = () =>{
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return (
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
    )
}
export default Product;