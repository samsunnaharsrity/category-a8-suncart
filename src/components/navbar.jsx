import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";


const Navbar = () => {
    return (
        <div className="border-b shadow">
            <div className="flex justify-between items-center container mx-auto my-2">
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
                <h2 className="text-2xl text-orange-400 font-bold">Sun<span className="text-black">Cart</span></h2>
                <p className="text-zinc-400 text-[10px]">Summer Essentials Store</p>                
            </div>    
            </div>

            <div >
                <ul className="flex items-center justify-between gap-4 font-semibold text-[12px]">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={''}>Products</Link>
                    </li>
                    <li>
                        <Link href={''}>My Profile</Link>
                    </li>
                </ul>
            </div>


            <div className="flex gap-2 ">
                <p className=" border rounded-full items-center flex px-2">
                    <IoIosSearch />
                </p>
                <p className="rounded-full border items-center flex px-2">
                    <IoCartOutline />
                </p>

                <Button variant="outline" className=" rounded-md py-1 px-5">Login</Button>
                <Button className=" rounded-md py-1 px-5 bg-orange-400 hover:bg-orange-500">Register</Button>
            </div>
        </div>    
        </div>
    );
}

export default Navbar;
