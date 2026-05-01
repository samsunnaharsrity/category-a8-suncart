import Banner from "@/components/banner";
import ProductData from "@/components/productData/productData";

export const metadata = {
  title: "SunCart - Home",
  description: "Summer Essentials Store",
};


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <ProductData></ProductData>
    </div>
  );
}
