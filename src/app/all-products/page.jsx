import ProductCart from '@/components/productCart/productCart';
import React from 'react';

const AllProductsPage =async () => {

const res = await fetch("https://category-a8-suncart.vercel.app/data.json")
const allProducts = await res.json()
console.log(allProducts);

    return (
        <div>
            <h2 className="text-3xl font-bold mt-10">All Products</h2>

            <div className=" grid grid-cols-2 md:grid-cols-3">
                {
                    allProducts.map(latestProduct =>
                        <ProductCart key={latestProduct.id} latestProduct={latestProduct}></ProductCart>
                    )
                }
            </div>
        </div>
    );
}

export default AllProductsPage;
