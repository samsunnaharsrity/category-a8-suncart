import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { RiStarSFill } from 'react-icons/ri';

const ProductCart = ({latestProduct}) => {

console.log(latestProduct);

    return (

    <Card className='border rounded-xl m-5 items-center justify-center'>
        <div className='relative w-full aspect-square '>
        <Image src={latestProduct.image} 
                alt={latestProduct.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-xl'/>

        <Chip className='absolute m-2 bg-gray-100 text-orange-500'>
            {latestProduct.brand}
        </Chip>    
        </div>

        <div>
            <h2 className='font-semibold'>{latestProduct.name}</h2>
        </div>

        <div className='flex items-center gap-1 font-semibold'>
            <span className='text-orange-300 text-[20px]'><RiStarSFill /></span>
            <p>{latestProduct.rating}</p>
        </div>

        <div className="flex items-center gap-2 justify-center">
            <p className="text-lg font-bold text-orange-500">
            ${latestProduct.price - (latestProduct.price * latestProduct.discountPrice) / 100}
            </p>

            <p className="line-through text-gray-400">
            ${latestProduct.price}
            </p>
            <span className="absolute top-3 right-0 bg-red-500 text-white px-4 py-2    rounded-l-full font-bold shadow-lg">
                {latestProduct.discountPrice}% OFF
            </span>
        </div>

        <div className='w-full flex justify-center border py-2 rounded-md text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>
            <button className=' font-semibold text-[12px]'> 
                View Details
            </button>
        </div>
    </Card>

    );
}

export default ProductCart;
