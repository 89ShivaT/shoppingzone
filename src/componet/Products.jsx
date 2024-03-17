import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Products({ productItem, setCart, cart }) {
  const addtoCart = (id, image, price, description, title) => {
    const obj ={ id, image, price, description, title};
    setCart([...cart, obj]);
    // console.log(cart);

    toast.success("Your Item Added", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div>
        <div className="container">
          <div className="row md:grid xl:grid-cols-4 md:gap-4 lg:grid-cols-3 md:grid-cols-2 md:mr-0 mr-4">
            {productItem.map((ele, i) => {
              return (
                <div key={i}>
                  <div className="relative md:m-10  md:flex md:w-full   flex-col  overflow-hidden rounded-lg border-2 border-gray-100 bg-white shadow-md">
                    <div className="relative mx-3 mt-3 md:flex w-full justify-center h-60 overflow-hidden rounded-xl">
                      <NavLink to={`/products/${ele.id}`}>
                        <img
                          className="object-cover w-full"

                          src={ele.image}
                          alt="product image"
                        />
                      </NavLink>
                      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {ele.rating.dec}% OFF
                      </span>
                    </div>
                    <div className="mt-4 px-5 pb-5">
                      <div>
                        <h5 className="text-xl tracking-tight text-slate-900">
                          {ele.title}
                        </h5>
                      </div>
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
                      <div
                        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={() =>
                          addtoCart(
                            ele.id,
                            ele.image,
                            ele.price,
                            ele.description,
                            ele.title
                           
                          )
                        }
                      >
                        <MdOutlineShoppingCart className="text-3xl mr-2 cursor-pointer" />
                        Add to cart
                      </div>
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
