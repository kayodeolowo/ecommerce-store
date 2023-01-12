import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Products = () => {
      const [products] = useContext(DataContext).products;
   const addToCart = useContext(DataContext).addToCart;


  return (
    <div>
         {products.map((product)=>(
            <div  product={product} key={product.id}> 
               <div> 
                     <h1> {product.title} </h1>

                  <img className="h-6"  src={product.image} />

                   <div> 
                 <button className="bg-primarygreen text-black font-medium px-4 rounded py-2" onClick={() => addToCart(product.id)}>Add to cart</button>
              </div>
                </div>

                
           
            </div>

            
         ))}
         
    </div>
  )
}

export default Products