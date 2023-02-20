import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataProvider";
import {HiOutlinePlusCircle, HiOutlineMinusCircle} from 'react-icons/hi'
import {BsChevronDown} from "react-icons/bs"



function Cart() {
  
  const [cart, setCart] = useContext(DataContext).cart;
  const [total, setTotal] = useState();



  
  
 


  const getTotal = () => {
    let summ = 0;
  
    
    for (let i = 0; i < cart.length; i++) {
      summ +=  cart[i].price * cart[i].count  ;
    }
    setTotal(summ);
  };
  useEffect(() => {
    getTotal();
  }, [cart, getTotal]);

  

  const increase = (id) => {
    
    cart.forEach((element) => {
      if (element.id === id) {
        element.count += 1;
      }
    });
    setCart([...cart]);
  };
  const decrease = (id) => {
    cart.forEach((element) => {
      if (element.id === id) {
        if (element.count <= 1) {
          element.count = 1;
        } else {
          element.count -= 1;
        }
      }
    });
    setCart([...cart]);
  };

  const remove = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    console.log(filteredCart);

    setCart(filteredCart);
    
  };

  return (
    
    <div className="container mx-auto  lg:px-10 xl:max-w-[1280px] lg:mt-20">
      
      
      { cart.length ? ( cart.map((item, index) =>
       (
         
        <div key={index} className="flex flex-row border-2 w-11/12 lg:w-full mx-auto mt-4 px-2   lg:px-8 py-2 lg:py-4 h-fit  border-primarygreen    justify-evenly sm:space-x-4 lg:justify-between rounded-lg   ">
          
        <div className=" flex flex-col lg:flex-row  lg:space-x-28 items-center  "> 
             <div className="flex mt-4 lg:mt-0  space-x-2 sm:space-x-4 lg:space-x-6"> 
            
            <img className="lg:h-14 h-8 sm:h-10" src={`${item.image}`} />
            <h1 className="font-bold lg:mt-4 sm:mt-2 lg:text-xl">{item.title}</h1>
            <h1> {item.price} </h1>
         </div>

          <div className="  flex mt-10 lg:mt-0  space-x-4  sm:space-x-8  "> 
             
           <button onClick={() => remove(item.id)} className='text-primaryred font-semibold'>
              Delete
            </button>
          </div>
        </div>

          <div className="   ">                       
            <div className="text-textGray"> 
              <h1 className="hidden lg:block  font-medium"> Value(₦) </h1>
            </div>          
            
           <div className="flex flex-col-reverse space-y-2 lg:space-y-0  lg:flex-row justify-between items-center lg:space-x-5  lg:px-2  lg:pb-2 rounded border-primarygreen lg:border-2 lg:pt-1"> 
              <h4 className="font-bold mt-4  lg:mt-0 text-sm sm:text-2xl lg:text-base  flex items-center"> <span className="lg:hidden text-sm text-textGray"> ₦ </span> {item.id * item.price}</h4>
              <HiOutlineMinusCircle className="hover:cursor-pointer text-xl sm:text-3xl lg:text-base" onClick={() => decrease(item.id)}> - </HiOutlineMinusCircle>
              <span className="text-textGray">{item.count}</span>
              
              <HiOutlinePlusCircle className="hover:cursor-pointer text-xl sm:text-3xl lg:text-base " onClick={() => increase(item.id)}> + </HiOutlinePlusCircle>
           </div>
              
            </div>
         

         
        </div>
      )) ) : ( <div className="w-1/2   mx-auto mt-[50%] md:mt-[10%] ">  <h1 className="text-center text-lg md:text-2xl text-primaryred font-medium">You are yet to add Bond Offer to Cart  
       
           </h1> 
           <img className="w-fit mt-4 mx-auto"  src="./images/emptycart.png"/>
           </div>)  
       }

        { cart.length ? ( 
        
       <div> 
             <div className="border-2 border-primarygreen mt-6 pl-16 pr-10 flex flex-col mx-auto rounded-lg w-11/12 lg:w-full lg:flex-row justify-between pt-4 pb-5">
       
        <div className="flex flex-col text-textGray font-medium space-y-8"> 
           <div className="flex space-x-16"> 
               <h1 className="flex "> Fees + Taxes <span className="mt-2 ml-1 ">  <BsChevronDown className="h-3"/> </span>   </h1>
            <h1> N 2.09 </h1>

           </div>

           <div className=" lg:w-[18rem] lg:text-[0.9rem]"> 
              <p> This is a 730 days Saving Bond, you have a fixed income </p>
           </div>
        </div>

        <div className="flex lg:items-end mt-4 justify-center lg:justify-start items-center lg:flex-col space-x-4 lg:space-x-0 "> 
          <h1 className="lg:text-end text-center mt-1 lg:mt-0 text-textGray font-medium"> Total Buy </h1>
          <h1 className="font-semibold text-center text-base sm:text-2xl lg:text-end w-fit  lg:text-lg  mt-1">₦{total + 2.0900} </h1>
        </div>
          
        
      </div>

      <div className="w-fit mx-auto flex lg:w-full mt-10 lg:mt-8 lg:justify-end "> 
       <button  className="bg-primarygreen text-white text-lg md:text-base px-6   py-2  rounded"> Check Out </button> 
       
         
        
      </div>
       </div>
        ) : "" }


       
    </div>
  );
}
export default Cart;