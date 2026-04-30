import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProductCart = ({latestProduct}) => {

console.log(latestProduct);

    return (

            <Card>
                <div>
                  <img src={latestProduct.image} alt={latestProduct.name} />
                </div>
                <div></div>
            </Card>

    );
}

export default ProductCart;
