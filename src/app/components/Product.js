"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import primeImage from "../../../public/static/prime.png";

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState();
  const [hasPrime, setHasPrime] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setRating(Math.floor(Math.random() * 5) + 1);
    setHasPrime(Math.random() > 0.5);
  }, []);

  const addToCartHandler = () => {
    const product = {
      id,
      title,
      price,
      rating,
      hasPrime,
      description,
      category,
      image,
      qty: 1,
    };
    dispatch(addToCart(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 rounded-xl py-10 px-4">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category.toUpperCase()}
      </p>
      <Image
        className="self-center"
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
        alt="Product"
      />
      <h4 className="my-4">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price)}
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 mb-1">
          <Image className="w-12" src={primeImage} alt="Prime" />
          <p className="text-xs text-gray-500">Next-day-Delivery FREE!!!</p>
        </div>
      )}

      <button onClick={addToCartHandler} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
