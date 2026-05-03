import Link from "next/link";
import ProductCart from "../productCart/productCart";
import NavLink from "../navLink";


const ProductData = async() => {

const res = await fetch("https://category-a8-suncart-server.onrender.com/projects")
const data = await res.json()
console.log(data);

const latestProducts = data.slice(0,3)
console.log(latestProducts);

    return (
        <div className="mt-10 px-4 sm:px-6 lg:px-0">
            <h2 className=" animate__animated animate__bounce text-3xl font-bold sm:text-left mb-6">Popular Products</h2>


            <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
                {
                    latestProducts.map((latestProduct,index) =>
                       <ProductCart key={index} latestProduct={latestProduct}></ProductCart>
                    )
                }
            </div>

            <div className="mx-auto flex w-fit bg-orange-500 text-gray-100 px-5 py-3 font-bold text-[10px] hover:bg-orange-600 rounded-md mb-10 ">
                <NavLink href={'/all-products'} >
                    <span className="w-[70px] text-center">More Products</span>
                </NavLink>  
            </div>
        </div>
    );
}

export default ProductData;
