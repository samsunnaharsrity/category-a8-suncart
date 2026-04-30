import Image from 'next/image';
import { AiOutlineYoutube } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { TiSocialFacebook } from 'react-icons/ti';


const Footer = () => {
    return (
        <div className='bg-blue-950 rounded-md'>

        <div className=' md:flex justify-around px-20 py-10 '>


            <div className="flex flex-col gap-4 items-center justify-center">
                <div className='flex'>
                    <Image
                    src={"/logo2.png"}
                    alt="nav logo"
                    loading="eager"
                    width={50}
                    height={50}
                    className=""
                    ></Image>
    
                    <div>
                        <h2 className="text-2xl text-orange-300 font-bold">Sun<span className="text-gray-300">Cart</span></h2>
                        <p className="text-gray-400 text-[10px]">Summer Essentials Store</p>                
                    </div>                     
                </div>
            </div>
                            {/* contact us */}
            <div className='text-gray-400 space-y-4 mt-5 '>
                <h2 className='font-semibold text-gray-300'>Contact Us</h2>

                <p className='text-[10px] flex items-center gap-1'>
                    <span className='text-[15px] text-orange-300'><MdOutlineEmail /></span>
                    samsunnaharsrity@gmail.com
                </p>
                <p className='text-[10px] flex items-center gap-1'>
                    <span className='text-[15px] text-orange-300'><MdOutlinePhone /></span>
                    +880 1872072303
                </p>
                <p className='text-[10px] flex items-center gap-1'>
                    <span className='text-[15px] text-orange-300'><CiLocationOn /></span>
                    Dhaka,Bangladesh
                </p>
            </div>  
            
                    {/* Follow us sec */}
            <div className='text-gray-400 space-y-4 mt-5'>
                <h2 className='font-semibold text-gray-300'>Follow Us</h2>

                <p className='text-[10px] flex items-center gap-1'>
                    <span className='text-[15px]'><TiSocialFacebook /></span>
                    Facebook
                </p>
                <p className='text-[10px] flex items-center gap-1'>
                    <span className='text-[15px]'><FaInstagram /></span>
                    Instagram
                </p>
                <p className='text-[10px] flex items-center gap-1'>
                    <span className='text-[15px]'><AiOutlineYoutube /></span>
                    Youtube
                </p>
            </div>


                    {/* legal issues */}

            <div className='text-gray-400  space-y-3 mt-5'>
                <h2 className='font-semibold text-gray-300'>Legal</h2>
               <p className='border-b border-gray-400 pb-3 text-[8px] flex items-center gap-5
               '>
                Privacy Policy
                <span><IoIosArrowForward /></span>
                </p> 
               <p className='border-b border-gray-400 pb-3 text-[8px] flex items-center gap-5'>Terms of Service
                <IoIosArrowForward />
                </p> 
               <p className='border-b border-gray-400 pb-3 text-[8px] flex items-center gap-5'>Refund Policy
                <IoIosArrowForward />
                </p> 
               <p className='border-b border-gray-400 pb-3 text-[8px] flex items-center gap-5'>Shipping Policy
                <IoIosArrowForward />
                </p> 
                
            </div>             
        </div>

        <p className='border-t border-gray-700 py-3'>
            <span className='text-gray-400 flex justify-center text-[8px]'>
                © {new Date().getFullYear()} SunCart- All right reserved
            </span>
        </p>
        </div>
    );
}

export default Footer;
