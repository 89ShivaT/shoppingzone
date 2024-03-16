import React, {useState} from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import {NavLink} from "react-router-dom";
function Products({ productItem,setCart,cart }) {
  return (
    <>
      <div>
        <div className="container">
          <div className="row md:grid xl:grid-cols-4 md:gap-4 lg:grid-cols-3 md:grid-cols-2 ">
            {productItem.map((ele, i) => {
              
              return (
                <div key={i}>
                  <div
                    
                    className="relative m-10 flex w-full max-w-xs   flex-col  overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                  >
                    <a
                      className="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl"
                      
                    >
                     
                      <NavLink to={`/products/${ele.id}`}>
                      <img
                        className="object-cover"
                        src={ele.image}
                        alt="product image"
                      />
              
                      </NavLink>
                      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {ele.rating.dec}% OFF
                      </span>
                    </a>
                    <div className="mt-4 px-5 pb-5">
                      <a>
                        <h5 className="text-xl tracking-tight text-slate-900">
                         {ele.title}
                        </h5>
                      </a>
                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-3xl font-bold text-slate-900">
                            ${ele.price}
                          </span>
                          <span className="text-sm text-slate-900 line-through">
                            ${ele.rating.count}
                          </span>
                        </p>
                      </div>
                      <a
                        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={()=>setCart(cart + 1)}
                      >
                        <MdOutlineShoppingCart className="text-3xl mr-2 cursor-pointer" />
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
