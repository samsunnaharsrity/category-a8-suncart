import Image from "next/image";
import { IoSunny } from "react-icons/io5";

const SummerCareTips = () => {
    return (
        <div className="mt-10 px-4 sm:px-6 lg-px-0 bg-orange-100 p-6 rounded-md">

            <h2 className="flex gap-1 items-center text-3xl font-bold sm:text-left mb-6">
                <span className="text-orange-500"><IoSunny /></span>
                Summer Care Tips
            </h2>


            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                <div className="border-r pr-5">

                    <div className="flex items-center justify-center">
                    <img className="w-[80px] h-[80px] " src="./tips-b.png" alt="water" />                        
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Stay Hydrated
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed">
                        Drink plenty of water throughout the day to keep your body cool and energized.
                    </p>
                </div>


                <div className="border-r pr-5">

                    <div className="flex items-center justify-center">
                    <img className="w-[80px] h-[80px] " 
                    src="./tips-2.png" alt="Sunscreen" />                        
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Use Sunscreen
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Apply SPF 30+ sunscreen before going outside to protect your skin from UV rays.
                    </p>
                </div>


                <div className="border-r pr-5">

                    <div className="flex items-center justify-center">
                    <img className="w-[80px] h-[80px] " 
                    src="./tips-3.png" alt="" />                        
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Wear Sunglasses
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Use UV-protection sunglasses to protect your eyes from harmful sunlight.
                    </p>
                </div>


                <div className="">

                    <div className="flex items-center justify-center">
                    <img className="w-[80px] h-[80px] " 
                    src="./tips-4.png" alt="" />                        
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Wear Light Clothes
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Choose light-colored and breathable cotton clothes to stay cool.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default SummerCareTips;
