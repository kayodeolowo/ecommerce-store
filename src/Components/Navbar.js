import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';
import { UserAuth } from "../Context/AuthContext";
import {FiShoppingCart} from 'react-icons/fi';
import { DataContext } from "../Context/DataProvider";
import {RxPerson} from 'react-icons/rx'


const Navbar = () => {
  const {user, logout} = UserAuth( )
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
    const [cart] = useContext(DataContext).cart;
  
  const activeLink = " text-primaryblue transition duration-300 font-semibold   ";
  const normalLink = "";
  


  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };
  
    return (
      <header className=''> 
         <div className="flex container mx-auto justify-between  items-center       
          text-white  z-10  xl:max-w-[1280px] lg:mt-2 lg:px-2  "> 
          
                    
                    <div className=' md:px-0 ' >
                      <NavLink to='/'>
                        <div className='flex items-center'> 
                       <img   className='hover:cursor-pointer transition max-h-16 mt-4' src="./images/LOGO.png" alt='logo'/>
                      
                          </div>
                         </NavLink>
                        
                     </div> 
                     

                     <div    className=''   > 
                        
                             
                            
                            
                             {user?.email ? ( <div className="lg:flex hidden text-textGray  justify-between items-center text-lg mt-1 space-x-8"> 
                             <NavLink to='/bond-offer'> <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Bond Offer </p>   </NavLink> 
                              <p className='hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Portfolio</p>               
                              
                              <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Notification </p>  
                            
                            <NavLink to='/account'>  <RxPerson className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'/> </NavLink> </div> ) 
                            : 
                            ( <div className="lg:flex hidden text-textGray text-lg items-center  mt-1 space-x-8">  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  font-medium  duration-200 hover:text-semibold'> DMO </p> <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Features </p>    <NavLink to='/signin'>  <p className=' hover:text-white hover:bg-primarygreen mt-1 hover:cursor-pointer transition   duration-200 hover:text-semibold border-2 border-primarygreen rounded px-4 py-1 text-primarygreen ml-14'>Login </p> </NavLink>
                             <NavLink to='/signup'> <p className=' hover:text-primarygreen hover:bg-bgcolor hover:border-2 hover:border-primarygreen  hover:cursor-pointer transition  duration-200 hover:text-semibold bg-black px-4 py-1 rounded text-white border-2  mt-1 '> Sign Up </p> </NavLink> </div>  ) }
                            
                     </div>

                     <div  className=' lg:mt-2  mr-4 lg:mr-0 text-black '> 
            <Link to='/cart' className='relative'>
            <FiShoppingCart className='text-[2rem] ' />
            <span
              className={`w-5 h-5 absolute -top-1 -right-2 text-center text-sm  rounded-full bg-primaryred text-black grid place-items-center ${
                cart.length > 0 ? 'grid' : 'hidden'
              }`}
            >
              {cart?.length}
            </span>
          </Link>
                            
              </div>
  
            {/* mobile hamburger */} 
            <div   onClick={handleNav} className=' lg:hidden z-10 mr-2'> 
            {nav ? <AiOutlineClose className='text-[#000000]  text-2xl sm:text-3xl items-center mt-1' /> :   <TbMenu2 className='text-[#000000] text-2xl sm:text-3xl items-center mt-1 left-0  duration-50' />}
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-center     text-2xl   text-[#000000]  left-0 top-5    w-full  mx-auto z-10  absolute  flex h-[100%]    mt-14    flex-col' : 'absolute left-[-100%]  '}>
              <div > 
                  <div  id='bold'> 
                      <ul  className=' text-xl  font-bold mt-[25%] flex flex-col text-center space-y-8     text-black w-fit mx-auto  '> 
                        
                                
                            
                             
                               {user?.email ? ( <div className=" text-textGray  justify-between items-center text-lg flex flex-col space-y-6"> <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' '>Home</p>      </NavLink>  <NavLink to='/bond-offer'> <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Bond Offer </p>   </NavLink>  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Portfolio </p>                              <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Notification </p>  
                            
                            <NavLink to='/account'>  <RxPerson className=' w-fit mx-auto text-3xl  font-bold'/> </NavLink> </div> ) 
                            :
                             ( <div className=" text-textGray text-lg items-center  flex  flex-col space-y-6 "> <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' '>Home</p>      </NavLink>  <p className='  transition  font-medium  duration-200 '> DMO </p> <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold font-medium'> Features </p>    <NavLink to='/signin'>  <p className=' border-2 border-primarygreen rounded px-4 py-1 text-primarygreen  w-fit mx-auto'>Login </p> </NavLink>
                             <NavLink to='/signup'> <p className=' transition  duration-200 hover:text-semibold bg-black px-4 py-1 rounded text-white border-2 w-fit mx-auto  mt-2 '> Sign Up </p> </NavLink> </div>  ) }
                             
                          
                            </ul>
                  </div>
        </div>
      </div>
            
        </div>
      </header>
       
    )
}

export default Navbar;