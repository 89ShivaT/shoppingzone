import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
function Cart({ cart, setCart }) {
  // console.log(cart)
  return (
    <>
      <div className="py-4">
        <div className="container mx-auto py-5 w-full ">
          {cart.map((ele) => {
            return (
              <div className="md:flex md:justify-center w-full  md:items-center px-5" key={ele.id}>
                <a
                href="#"
                className="md:flex flex-col md:m-5 md:h-[300px]   bg-white border border-gray-200 rounded-lg shadow md:flex-row min-w-[100%] md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover   h-[100%]  md:w-48 md:rounded-none md:rounded-s-lg"
                  src={ele.image}
                  alt=""
                />
                <div className="flex flex-col gap-4 p-4 leading-normal ">
                  <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 md:dark:text-white">
                   {ele.title}
                  </h5>
                  <p className="mb-3  md:text-left font-normal text-gray-700 md:dark:text-gray-400">
                   {ele.description}
                  </p>
                  <div className="mt-2 mb-5 md:flex md:text-left text-center items-center justify-between">
                        <p>
                          <span className="  text-3xl font-bold md:text-white">
                           ${ele.price}
                          </span>
                         
                        </p>
                      </div>
                  <div className="btn flex items-center justify-center gap-5">
                  <button className=" flex items-center gap-2 text-center py-2 md:px-12 px-10  bg-blue-700 border md:text-white rounded-full md:bg-transparent hover:bg-[#e33054] hover:border-none duration-200 ease-in-out">
                 <MdOutlineShoppingCart className="md:text-2xl text-2xl text-white"/>
                <span className="hidden md:block">  Add to cart</span>
                  </button>
                  <button className=" flex items-center gap-2 py-2 px-12 border mg:text-white bg-[red] text-white rounded-full md:bg-transparent hover:bg-[#e33054] hover:border-none duration-200 ease-in-out">
                
                Buy Now
                  </button>
                </div>
                </div>
              </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
