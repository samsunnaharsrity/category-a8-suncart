"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {

const pathName = usePathname()
console.log(pathName);

const isActive = href === pathName;

    return (
        <div>

        <Link href={href} className={`${isActive ? 'border-b-2 border-orange-400 text-orange-400' : ''}`}>
            {children}
        </Link>

       </div>

    );
}

export default NavLink;
