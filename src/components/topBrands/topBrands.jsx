import { TbBrand4Chan } from "react-icons/tb";

const TopBrands = () => {
    return (
        <div>


            <div className="mt-10">
                <h2 className="flex items-center gap-1 text-3xl font-bold sm:text-left mb-6">
                    <span className="text-orange-500"><TbBrand4Chan /></span>
                    Top Brands
                </h2>                
            </div>
            <div className="mt-5 sm:px-6 lg-px-0">


            </div>

                        {/* brands */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-10">

                <div className="border shadow p-8 rounded-md">
                    <div className="flex items-center justify-center">
                        <img className="" src="./brand-1.png" alt="" />
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Neutrogena
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed">Skincare & Sunscreen</p>
                </div>


                <div className="border shadow p-8 rounded-md">
                    <div className="flex items-center justify-center">
                        <img className="w-[80px]" src="./brand-2.png" alt="" />
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Nike
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed">Summer Clothing & Style</p>
                </div>


                <div className="border shadow p-8 rounded-md">
                    <div className="flex items-center justify-center">
                        <img className="w-[80px] pb-3" src="./brand-3.png" alt="" />
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        ZARA
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed">
                        Summer Style $ Trendy Outfits
                    </p>
                </div>



                <div className="border shadow p-8 rounded-md">
                    <div className="flex items-center justify-center">
                        <img className="w-[100px] pb-3" src="./brand-4.png" alt="" />
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Ray-Ban
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed">
                        Premium Sunglasses
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TopBrands;
