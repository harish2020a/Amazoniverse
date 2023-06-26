"use client";
import React from "react";
import Product from "./Product";
import Image from "next/image";
import bannerImage from "../../../public/static/banner.jpg";

const ProductFeed = ({ products }) => {
  return (
    <div className="max-w-screen-2xl grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:-mt-96">
      {products.slice(0, 4).map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={(product.price * 81.96).toFixed(2)}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
      <Image className="hidden lg:block md:col-span-full" src={bannerImage} alt="Banner" />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={(product.price * 81.96).toFixed(2)}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
      {products.slice(5, products.length).map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={(product.price * 81.96).toFixed(2)}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
