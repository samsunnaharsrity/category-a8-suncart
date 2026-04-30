import { GoSun } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";



const Banner = () => {
    return (
        <div className="container mx-auto relative top-2 ">
        <div>

            {/* banner img */}
        <div className="h-[250px] md:h-[400px]">
            <img
                src="/banner2.jpg"
                className=" w-full h-full object-fill rounded-sm"
            />
        </div>


        <div className="absolute top-13 left-34 md:left-50 md:top-16 text-left">
            <p className="text-sm md:text-md text-orange-500 font-semibold text-center">Special</p>
        </div>

        <div className="absolute top-11 left-24 md:left-35 text-white ">  

            <p className="text-5xl md:text-7xl font-semibold text-gray-800"><span className="text-6xl md:text-8xl">S</span>ummer</p>


            <div className="flex items-center justify-center">
                
                <p className="text-3xl md:text-6xl font-semibold text-orange-500"><span className="text-4xl md:text-7xl">S</span>ale </p>

                <div className="w-14 h-14 md:w-20 md:h-20 flex flex-col justify-center items-center bg-orange-600 rounded-full text-white shadow-lg">
                    <span className="text-lg md:text-3xl font-bold ">50%</span>
                    <span className="text-[10px] md:text-sm">OFF</span>
                </div>

            </div>
                <p className="text-gray-600 text-[10px] md:text-sm font-bold text-center">On All Summer Essentials</p>
        </div>

                                {/* features */}
        <div className="hidden sm:flex items-center absolute bottom-5 left-4 md:bottom-25 md:left-33 gap-2 text-gray-600">
            <p className="flex flex-col items-center text-[10px] md:text-xs border-r pr-2">
                <GoSun className="text-lg md:text-xl" />
                Top Brands</p>
            <p className="flex flex-col items-center text-[10px] md:text-xs border-r pr-2">
                <AiOutlineSafetyCertificate className="text-lg md:text-xl"  />
                100% Original</p>

            <p className="flex flex-col items-center text-[10px] md:text-xs border-r pr-2">
                <IoMdPricetag className="text-lg md:text-xl"  />
                Beat Prices</p>
            <p className="flex flex-col items-center text-[10px] md:text-xs">
                <CiDeliveryTruck className="text-lg md:text-xl"  />
                Free Delivery</p>
        </div>    

                            {/* shop now btn */}
        <div className="absolute bottom-13 left-40 md:left-55 md:bottom-15 ">
            <button className="bg-orange-500 text-gray-200 px-2 py-1 font-bold text-[10px]  md:px-6 md:py-2 md:text-[12px] rounded-md hover:bg-orange-600 flex items-center gap-1"> 
                Shop Now
                <FaArrowRight />
            </button>
            
        </div>          
        </div> 

                            {/* right side img */}
        <div className="top-21 left-65 absolute md:top-16.5 md:left-75 lg:left-110">
            <img
                src="/side-banner.png"
                className=" w-[250px] md:w-[500px] h-full object-contain"
            />
            
        </div> 
        </div>
    );
}

export default Banner;
