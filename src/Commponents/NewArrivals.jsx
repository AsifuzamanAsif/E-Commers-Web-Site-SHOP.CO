import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiShoppingBasket } from "react-icons/ci";
function NewArrivals({}) {
  let [product, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <section className="font-primary  text-gray-600 ">
      <h1 className="py-14 flex justify-center font-secondary text-5xl">
        NewArrivals
      </h1>
      <div className="container px-5 py-20 mx-auto">
        <div className="flex justify-center flex-wrap -m-4 5">
          {product.slice(0, 6).map((item) => (
            <div
              className=" bg-slate-300 ml-5 mt-3 lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg "
              key={item.id}
            >
              <div>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={item.image}
                  />
                </a>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">Price: {item.price} BDT</p>
                <button
                  onClick={() => AddToCart(popularItem)}
                  className="flex ml-auto mt-2 text-white bg-yellow-500 border-0 py-2 px-3  rounded"
                >
                  Add Cart <CiShoppingBasket className="  text-2xl " />{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
