import ProductCart from '@/components/productCart/productCart';
import { Spinner } from '@heroui/react';
import React from 'react';

export const metadata = {
  title: "SunCart - Products",
  description: "Summer Essentials Store",
};

const AllProductsPage =async () => {

const res = await fetch("http://localhost:3000/data.json")
const allProducts = await res.json()
console.log(allProducts);


 if (!allProducts) {
    return <div className="flex flex-col items-center gap-2">
        <Spinner color="warning" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
  }
      

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
