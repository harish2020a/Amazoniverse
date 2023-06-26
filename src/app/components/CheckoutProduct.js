"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
} from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
  qty,
}) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeFromCart(id));
  };

  const increaseQuantityHandler = () => {
    dispatch(increaseQuantity(id));
  };
  const decreaseQuantityHandler = () => {
    dispatch(decreaseQuantity(id));
  };

  const quantityChangeHandler = (event) => {
    dispatch(setQuantity({ id, value: event.target.value }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
        alt="Product"
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <StarIcon
                  key={i}
                  className="h-5 border-none text-yellow-500 fill-yellow-500"
                />
              );
            })}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(price)}
        <label htmlFor="qty" className="ml-4">
          Quantity:
        </label>
        <input
          onChange={quantityChangeHandler}
          type="number"
          name="qty"
          value={qty}
          min={1}
          className="bg-yellow-400 rounded-md w-20 ml-1 p-2"
        />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="/static/prime.png"
              alt="Prime"
            />
            <p className="text-xs text-gray-500">Next-day-Delivery FREE!!!</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={increaseQuantityHandler}>
          Quantity +
        </button>
        <button className="button mt-auto" onClick={decreaseQuantityHandler}>
          Quantity -
        </button>
        <button className="button mt-auto" onClick={removeItemHandler}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
