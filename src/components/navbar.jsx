"use client"
import { IoIosSearch, IoMdCloseCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLink from "./navLink";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {

const { data: session } = authClient.useSession()
//console.log(session);
const user = session?.user;
console.log(user);

    const [open, setOpen] = useState(false);
    return (


        
      <div className="border-b shadow px-2 sticky top-0 z-10 bg-white">

      <div className="flex justify-between items-center">
      <div className="flex justify-between items-center container mx-auto ">
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
 

                  {/* nav buttons */}
{
          user? (
          <div className="flex items-center gap-1">
               {/* <Image
               src={"/userImg.png"}
               alt="nav logo"
               referrerPolicy="no-referrer"
               loading="eager"
               width={35}
               height={20}
               className=""
               ></Image> */}
              <Avatar className="w-[30px] h-[30px] ">
              <Avatar.Image alt="user img"
              src={user?.image} />
              <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
            </Avatar>


                <Button 
                onClick={async() => await authClient.signOut()} 
                className=" rounded-md py-1 px-5 bg-orange-500 hover:bg-orange-600">
                   <Link href={"/"}>Logout</Link>
                </Button>

          </div>)            
           :         
                (<Button variant="outline" className=" rounded-md py-1 px-5 bg-orange-500 hover:bg-orange-600">
                  <Link href={"/signIn"}>Login</Link>
                </Button>)
}

                
            </div>
          
        </div>


                            {/* responsive sidebar */}

      <div className="relative flex">

        <div
          className=" md:hidden text-2xl cursor-pointer px-2  relative z-30"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdCloseCircleOutline /> : <HiMenuAlt3 />}
        </div>

        {open && (
          <div
            className="fixed inset-0 md:hidden z-10"
            onClick={() => setOpen(false)}
          />
        )}

        <div
          className={`absolute top-0 right-0 text-right p-4 z-20
          transform transition-transform duration-300 md:hidden

          ${open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`}
        >
          <div className=" font-semibold">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/all-products">Products</NavLink>
            <NavLink href="/myProfile">My Profile</NavLink>
          </div>
        </div>

      </div>          
      </div>
      </div>  
    
    );
}

export default Navbar;
