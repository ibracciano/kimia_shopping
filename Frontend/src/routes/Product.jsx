// import React from 'react'

import { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../toolkit/slices/cartSlice";
import { toast } from "react-toastify";

const Product = () => {
  const location = useLocation();
  const product = location.state.item;

  const dispatch = useDispatch();

  // quantité de base
  const [baseQuantity, setBaseQuantity] = useState(1);

  return (
    <div>
      <div className="flex flex-col md:flex-row w-[90%] gap-10 md:w-[80%] mx-auto mt-20 items-center">
        {/* image du produit */}
        <div className="bg-gray-100 w-full rounded-md md:w-[700px] h-[500px] flex items-center justify-center">
          <img src={product.thumbnail} alt={product.name} />
        </div>

        {/* détail du produit */}
        <div>
          {/* titre du produit */}
          <h1 className="text-2xl font-bold text-pink-600">{product.title}</h1>

          {/* description du produit */}
          <p className="my-5 text-lg">{product.description}</p>

          {/* prix du produit et categorie */}
          <div className="flex items-center gap-4 pt-4 border-t border-pink-500">
            <p className="bg-pink-500 w-[17%] md:w-[13%] text-center text-white font-bold rounded-sm py-1 px-1 my-5 relative">
              <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-[10px] text-pink-500 bg-white border border-pink-600 rounded-full shadow -right-4 -top-5">
                {product.discountPercentage}%
              </span>
              ${product.price}
            </p>

            <div className="flex gap-2">
              <p className="text-sm font-bold ">
                <span>brand : </span>
                <span className="text-pink-600">{product.brand}</span>
              </p>
              <p className="text-sm font-bold">
                <span>category : </span>
                <span className="text-pink-600">{product.category}</span>
              </p>
            </div>
          </div>

          {/* bouton d'ajout au panier et favoris */}
          <div className="flex items-center gap-5 mb-5">
            <div className="flex gap-2">
              <button
                className="w-10 h-10 p-1 text-black transition-all duration-700 bg-gray-300 rounded-full hover:bg-pink-600 "
                onClick={() =>
                  baseQuantity > 1 && setBaseQuantity(baseQuantity - 1)
                }
              >
                -
              </button>
              <span className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
                {baseQuantity}
              </span>
              <button
                className="w-10 h-10 p-1 text-black transition-all duration-700 bg-gray-300 rounded-full hover:bg-pink-600 "
                onClick={() =>
                  baseQuantity < parseInt(product.stock) &&
                  setBaseQuantity(baseQuantity + 1)
                }
              >
                +
              </button>
            </div>
            <button className="p-2 text-white transition-all duration-700 bg-pink-500 hover:bg-black"
              onClick={() => dispatch(addToCart({ ...product, quantity: baseQuantity })) &
                toast.success(`${product.title} is added to cart`)}
            >
              Add to cart
            </button>
            <button className="p-1 w-10 h-10 text-white transition-all duration-700 bg-pink-500 rounded-full hover:bg-pink-600 hover:rotate-[360deg]">
              <CiHeart size={30} />
            </button>
          </div>

          {/* commentaires sur le produit */}
          <div className="pt-4 border-t border-pink-500">
            <h2 className="mb-2 text-xl font-bold text-pink-600">
              Commentaires
            </h2>
            {/* liste des commentaires */}
            <div className="flex flex-col justify-between gap-4 md:items-center md:flex-row">
              {product.reviews.map((comment, index) => (
                <div key={index}>
                  <div className="w-8 h-8 rounded-full">
                    <img
                      src={`https://i.pravatar.cc/150?u=${comment.reviewerEmail}`}
                      alt=""
                      className="rounded-full"
                    />
                  </div>

                  <p className="text-sm font-semibold text-pink-600">
                    {comment.reviewerName}
                  </p>
                  <p className="text-sm text-gray-300">{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
