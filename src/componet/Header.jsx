import React, {useEffect, useState} from 'react'
import { FaShoppingBag } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import { item } from './Api';
import { MdOutlineShoppingCart } from "react-icons/md";


function Header({setData,cart}) {
    const navigate = useNavigate();
    const[searchData,setSearch]=useState("");
    // console.log(searchData);
    const categ =(category)=>{
     const cateData = item.filter((ele)=>ele.category ==category);
     setData(cateData)
    }

    const headelSerach = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchData}`)
        setSearch("")
    }
    
  return (
    <>
    <div className='main-wrapper w-full bg-[#19325C] sticky top-0 z-50'>
        <div className="md:container  md:mx-auto flex justify-between items-center py-3">
            <Link to={'/'} className="logo w-1/4 flex md:gap-2 items-center px-2">
                <FaShoppingBag className='md:text-3xl text-4xl text-[#E33054]'/>
                <h1 className='text-2xl text-white font-bold hidden md:block'>ShoppingZone</h1>
            </Link>
            
            <div className="serach md:w-1/3 ">
                <form action="" onSubmit={headelSerach} className=''>
                <input 
                value={searchData}
                type="search"
                 autoFocus 
                 name="Search ProDucts" 
                 id=""
                  className='py-1  rounded-full w-full border outline-none p-4'
                  onChange={(e)=>setSearch(e.target.value)}
                  />
                </form>
            </div>
            <div className="cart  w-[60px] flex  relative cursor-pointer">
             <MdOutlineShoppingCart className='text-white   text-3xl w-full'/>
             {
                (cart==0)?"" :<span className='bg-[#E33054] w-[25px] h-[25px] absolute right-[10px] rounded-full flex justify-center items-center text-white font-bold'>{cart}</span>
             }
            </div>
        </div>
        {/* container end here */}
    </div>

    <div className="min-top bg-[#E33054] py-2">
       <div className="container md:mx-auto ">
       <div className="categoury ">
                <ul className='flex md:gap-4 gap-2 text-white font-semibold md:text-lg md:items-center mr-5  justify-center'>
                    <li className='cursor-pointer' onClick={()=>categ("men's clothing")}>Men's</li>
                    <li className='cursor-pointer' onClick={()=>categ("jewelery")}>jewelery</li>
                    <li className='cursor-pointer' onClick={()=>categ("electronics")}>Electronics</li>
                    <li className='cursor-pointer' onClick={()=>categ("women's clothing")}>Womens</li>
                </ul>
            </div>
       </div>
    </div>
    {/* main top end here */}
    </>
  )
}

export default Header