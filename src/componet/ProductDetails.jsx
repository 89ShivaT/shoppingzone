import React, { useEffect, useState } from "react";
import { item } from "./Api";
import { useParams } from "react-router-dom";
import Products from "./Products";


function ProductDetails() {
  const { id } = useParams();
  const [filterDatas, setFilterData] = useState({});
  const [relData, setReleData] = useState([]);
  useEffect(() => {
    const filterData = item.filter((ele) => ele.id == id);
    setFilterData(filterData[0]);
    const rele = item.filter((ele) => ele.category == filterDatas.category);
    // console.log(rele);
    setReleData(rele);
  }, [id, filterDatas.category]);


  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8  ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className=" w-[350px] h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={filterDatas.image}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-[150px] px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                   
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-[200px] px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                  
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="md:flex-1 px-4  h-[300px] ">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Product Name
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {filterDatas.title}
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      ${filterDatas.price}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {filterDatas.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 px-3">
        <h1 className="text-3xl font-bold">Releted Products</h1>
        <Products productItem={relData}/>
      </div>
    </>
  );
}

export default ProductDetails;
