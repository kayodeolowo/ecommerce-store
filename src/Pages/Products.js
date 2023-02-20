import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import FadeLoader from 'react-spinners/FadeLoader'

const Products = () => {
      const [products, setProducts] = useContext(DataContext).products;
       const [loading] = useContext(DataContext).loading;
   const addToCart = useContext(DataContext).addToCart;


  return (
    <div>       



        <div> 
                         { loading ?  (products.map((product)=>(
            <div  product={product} key={product.id}> 
               <div> 
                     <h1> {product.title} </h1>
                     <img className="h-12"  src={product.image} />
                     <p> {product.price} </p>
                     

                  

                   <div> 
                 <button className="bg-primarygreen text-black font-medium px-4 rounded py-2" onClick={() => addToCart(product.id)}>Add to cart</button>
              </div>
                </div>   
            </div>      
         )   )) : <FadeLoader className="w-full mx-auto mt-[40%] md:mt-[15%]" color="#36d7b7" /> }
        </div>
       </div>
  )
}

export default Products