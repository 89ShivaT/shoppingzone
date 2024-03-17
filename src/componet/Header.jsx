import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { item } from "./Api";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header({ setData, cart }) {
  const navigate = useNavigate();
  const [searchData, setSearch] = useState("");
  // console.log(searchData);
  const categ = (category) => {
    const cateData = item.filter((ele) => ele.category == category);
    setData(cateData);
  };

  const headelSerach = (e) => {
    e.preventDefault();
    navigate(`/search/${searchData}`);
    setSearch("");
  };

  return (
    <>
      <div className="main-wrapper w-full bg-[#19325C] sticky top-0 z-50 px-3 md:px-0">
        <div className="md:container  md:mx-auto flex justify-between items-center py-3">
          <Link to={"/"} className="logo w-1/4 flex md:gap-2 items-center px-2">
            <FaShoppingBag className="md:text-3xl text-4xl text-[#E33054]" />
            <h1 className="text-2xl text-white font-bold hidden md:block">
              ShoppingZone
            </h1>
          </Link>

          <div className="serach md:w-1/3 mr-5 md:mr-0">
            <form action="" onSubmit={headelSerach} className="">
              <input
                value={searchData}
                type="search"
                autoFocus
                name="Search ProDucts"
                id=""
                className="py-1  rounded-full w-full border outline-none p-4"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          <div class="relative inline-flex mr-3 md:mr-0">
            <NavLink to={'/cart'}
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <MdOutlineShoppingCart className=" text-white text-3xl"/>
            </NavLink>
            <span class="absolute rounded-full font-bold py-1 px-1 text-xs  content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
             {cart.length}
            </span>
          </div>
        </div>
        {/* container end here */}
      </div>

      <div className="min-top bg-[#E33054] py-2">
        <div className="container md:mx-auto ">
          <div className="categoury ">
            <ul className="flex md:gap-4 gap-2 text-white font-semibold md:text-lg md:items-center mr-5  justify-center">
              <li
                className="cursor-pointer"
                onClick={() => categ("men's clothing")}
              >
                Men's
              </li>
              <li className="cursor-pointer" onClick={() => categ("jewelery")}>
                jewelery
              </li>
              <li
                className="cursor-pointer"
                onClick={() => categ("electronics")}
              >
                Electronics
              </li>
              <li
                className="cursor-pointer"
                onClick={() => categ("women's clothing")}
              >
                Womens
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* main top end here */}
    </>
  );
}

export default Header;
