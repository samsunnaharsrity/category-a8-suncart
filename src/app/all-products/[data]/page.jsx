import { Chip } from "@heroui/react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiStarSFill } from "react-icons/ri";


export const generateMetadata = async({params})=> {
    const {data} =await params;
    console.log(data);

  const res = await fetch("https://category-a8-suncart-server.onrender.com/projects");
  const allProducts = await res.json();

  const product = allProducts.find(item => item.id == data);

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductDetailsPage = async({params}) => {

const {data} = await params;
console.log(data);


const res = await fetch("https://category-a8-suncart-server.onrender.com/projects")
const allProducts = await res.json()
 console.log(allProducts ,"fetch");


const products = allProducts.find(product => product.id == data)
console.log(products);


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center">
                {/* details page img */}
                <div className="relative w-[350px] md:w-[400px] aspect-square">
                    <Image src={products.image} 
                        alt={products.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='object-cover rounded-xl shadow-xl'/> 
                  
                </div>


                {/* details page all data */}
                <div className="space-y-5 my-10 ">

                    <div className="flex">
                        <Chip className=' mr-2 text-gray-100 bg-orange-500'>{products.brand}</Chip>
                        <Chip  className=' mr-2 text-gray-100 bg-orange-500'>{products.category}</Chip>
                    </div>
                    

                    <div className='font-semibold text-2xl'>
                        {products.name}
                    <div className=" text-gray-400 flex items-center gap-2 text-[12px]">
                        <CiDeliveryTruck className="text-lg md:text-xl"  />
                        <p>Instant delivery available</p>    
                    </div> 
                    </div>


                    <div className='flex items-center gap-1 font-semibold text-gray-500'>
                        <span className='text-orange-300 text-[20px] '>
                            <RiStarSFill />
                        </span>
                        {products.rating}
                    </div>


                    <div  className=" text-gray-400">
                        {products.description}
                    </div>


                    <div className="flex gap-2 items-center">

                        <p className="text-lg font-bold text-orange-500">
                        ${products.price - (products.price * products.discountPrice) / 100}
                        </p>

                        <p className="line-through text-gray-400">
                        ${products.price}
                        </p>


                        <span className=" text-red-500 font-bold">
                            {products.discountPrice}% OFF
                        </span>
                    </div>


                    <span className="absolute top-27 right-18 md:right-[665px]  bg-red-500 text-white px-4 py-2 rounded-l-full font-bold shadow-lg">
                    {products.discountPrice}% OFF
                    </span>

                            {/* button */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 ">
                        <button className='w-full flex justify-center border py-2 rounded-md text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer'>
                            Add to Cart

                        </button>

                        <button className="w-full flex justify-center bg-orange-500 text-gray-100 px-2 py-1 md:px-6 md:py-2 rounded-md hover:bg-orange-600 items-center gap-1 cursor-pointer">
                            
                            Buy Now

                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;