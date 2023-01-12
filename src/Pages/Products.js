import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Products = () => {
      const [products] = useContext(DataContext).products;
   const addToCart = useContext(DataContext).addToCart;


  return (
    <div>
         {products.map((product)=>(
            <div  product={product} key={product._id}> 
                <h1> {product.title} </h1>


            </div>
         ))}
    </div>
  )
}

export default Products