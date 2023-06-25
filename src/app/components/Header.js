"use client";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectItems } from "../store/cartSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-6 ml-2 pr-4 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => {
              router.push("/");
            }}
            src="/static/logo.png"
            width={130}
            height={40}
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
            alt="Logo"
          />
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={signIn} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
          {session && (
            <div
              onClick={() => signOut()}
              className="font-extrabold md:text-sm bg-red-600 p-3 rounded-xl hover:bg-red-800 cursor-pointer"
            >
              <p>Sign Out</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-6 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars4Icon className="h-6 mr-2" />
          All
        </p>
        <p className="hidden lg:inline md:flex">
          Amazoniverse is a comprehensive e-commerce platform that replicates
          the core functionalities and features of the immensely popular online
          marketplace, Amazon!!!
        </p>
      </div>
    </header>
  );
};

export default Header;
