import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProductCart = ({latestProduct}) => {

console.log(latestProduct);

    return (

            <Card>
                <div>
                  <img src={latestProduct.image} 
                  alt={latestProduct.name} 
                  className=''/>
                </div>
                <div>
                    <h2 className='font-semibold'>{latestProduct.name}</h2>
                </div>

                <div>
                    <p>{latestProduct.rating}</p>
                </div>

<div className="flex items-center gap-2">
  <span className="text-xl font-bold text-orange-500">
    ${latestProduct.discountPrice}
  </span>

  <span className="text-gray-400 line-through">
    ${latestProduct.price}
  </span>

  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
    50% OFF
  </span>
</div>
            </Card>

    );
}

export default ProductCart;
