import { GoSun } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";



const Banner = () => {
    return (
        <div className="container mx-auto relative top-2 ">
        <div>
        <div className=" h-[400px]">
            <img
                src="/banner2.jpg"
                className=" w-full h-full object-fill rounded-sm"
            />
        </div>


        <div className="absolute top-16 left-50 text-center">
            <p className="text-md text-orange-600 font-semibold ">Special</p>
        </div>

        <div className="absolute top-12 left-35  text-white ">       
            <p className="text-7xl font-semibold text-[#1f2937]"><span className="text-8xl">S</span>ummer</p>
            <div className="flex items-center justify-center">
                <p className="text-6xl font-semibold text-orange-500"><span className="text-7xl">S</span>ale </p>
                <div className="w-20 h-20 p-2 flex flex-col justify-center items-center bg-orange-600 rounded-full text-white shadow-lg">
                    <span className="text-3xl font-bold ">50%</span>
                    <span className="text-sm font-medium">OFF</span>
                </div>

            </div>
                <p className="text-[#374151] text-center text-[12px] font-bold">On All Summer Essentials</p>
        </div>


        <div className="flex items-center absolute w-96 bottom-25 left-33 gap-2 text-black">
            <p className="border-r py-3 px-2 flex flex-col items-center text-[10px] font-semibold text-gray-600">
                <GoSun className="text-xl" />
                Top Brands</p>
            <p className="border-r py-3 px-2 flex flex-col items-center text-[10px] font-semibold text-gray-600">
                <AiOutlineSafetyCertificate className="text-xl"  />
                100% Original</p>

            <p className="border-r py-3 px-2 flex flex-col items-center text-[10px] font-semibold text-gray-600">
                <IoMdPricetag className="text-xl"  />
                Beat Prices</p>
            <p className=" py-3 px-2 flex flex-col items-center text-[10px] text-gray-600 font-semibold">
                <CiDeliveryTruck className="text-xl"  />
                Free Delivery</p>
        </div>              
        </div> 

        <div className="absolute top-17 left-95">
            <img
                src="/side-banner.png"
                className=" w-[500px] h-full object-fill "
            />
            
        </div> 

        <div className="absolute bottom-15 left-53 ">
            <button className="bg-orange-500 text-gray-800 px-6 py-2 font-bold text-[12px] rounded-xl flex items-center gap-1"> 
                Shop Now
                <FaArrowRight />
            </button>
            
        </div>          
        </div>
    );
}

export default Banner;
