import Link from "next/link";
import ProductCart from "../productCart/productCart";
import NavLink from "../navLink";

const ProductData = async() => {

const res = await fetch("https://category-a8-suncart.vercel.app/data.json")
const data = await res.json()
console.log(data);

const latestProducts = data.slice(0,6)
console.log(latestProducts);

    return (
        <div className="mt-10 ">
            <h2 className="text-3xl font-bold">Popular Products</h2>


            <div className="py-10 grid grid-cols-2 md:grid-cols-3">
                {
                    latestProducts.map((latestProduct,index) =>
                       <ProductCart key={index} latestProduct={latestProduct}></ProductCart>
                    )
                }
            </div>

            <div className="mx-auto flex w-fit bg-orange-500 text-gray-100 px-5 py-3 font-bold text-[10px] hover:bg-orange-600 rounded-md mb-10 ">
                <NavLink href={'/product'} >
                    <span className="w-[70px] text-center">More Products</span>
                </NavLink>  
            </div>
        </div>
    );
}

export default ProductData;
