import ProductCart from "../productCart/productCart";

const ProductData = async() => {

const res = await fetch("https://category-a8-suncart.vercel.app/data.json")
const data = await res.json()
console.log(data);

const latestProducts = data.slice(0,6)
console.log(latestProducts);

    return (
        <div className="py-10 ">
            <h2 className="text-2xl font-bold">Popular Products</h2>


            <div className="py-10 grid grid-cols-2 md:grid-cols-3">
                {
                    latestProducts.map((latestProduct,index) =>
                       <ProductCart key={index} latestProduct={latestProduct}></ProductCart>
                    )
                }
            </div>
        </div>
    );
}

export default ProductData;
