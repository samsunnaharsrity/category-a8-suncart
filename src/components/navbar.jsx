"use client"
import { IoIosSearch, IoMdCloseCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLink from "./navLink";
import { useState } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (


        
      <div className="border-b shadow px-2">

      <div className="flex justify-between items-center">
      <div className="flex justify-between items-center container mx-auto my-2 ">
        <div className="flex items-center">
               <Image
               src={"/logo.png"}
               alt="nav logo"
               loading="eager"
               width={50}
               height={50}
               className=""
               ></Image>

            <div>
                <h2 className="text-2xl md:text-2xl text-orange-500 font-bold">Sun<span className="text-black">Cart</span></h2>
                <p className="text-zinc-400 text-[10px] hidden sm:block">Summer Essentials Store</p>                
            </div>    
        </div>

        <div className="hidden md:block">
                <ul className=" flex items-center justify-between gap-4 font-semibold text-[12px]">
                    <li>
                        <NavLink href={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/all-products'}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/myProfile'}>My Profile</NavLink>
                    </li>
                </ul>
        </div>


            <div className=" gap-2 hidden md:flex ">
                <p className=" border rounded-full items-center flex px-2">
                    <IoIosSearch />
                </p>
                <p className="rounded-full border items-center flex px-2">
                    <IoCartOutline />
                </p>

                <Button variant="outline" className=" rounded-md py-1 px-5">
                  <Link href={"/signUp"}>Login</Link>
                </Button>
                <Button className=" rounded-md py-1 px-5 bg-orange-500 hover:bg-orange-600">
                   <Link href={"/"}>Register</Link>
                </Button>
                
            </div>
          
        </div>


                            {/* responsive sidebar */}

      <div className="relative flex">

        <div
          className=" md:hidden text-2xl cursor-pointer px-2  relative z-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdCloseCircleOutline /> : <HiMenuAlt3 />}
        </div>

        {open && (
          <div
            className="absolute inset-0 md:hidden z-40"
            onClick={() => setOpen(false)}
          />
        )}

        <div
          className={`absolute top-0 right-0 text-right p-4 z-1
          transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className=" font-semibold">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/product">Products</NavLink>
            <NavLink href="/myProfile">My Profile</NavLink>
          </div>
        </div>

      </div>          
      </div>
      </div>  
    
    );
}

export default Navbar;
